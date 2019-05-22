from rest_framework import serializers
from . import models
from rest_auth.registration.serializers import RegisterSerializer


# TODO: Review
class CustomRegisterSerializer(RegisterSerializer):
    email = serializers.EmailField(required=True)

    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()

        return {
            'email': self.validated_data.get('email', ''),
        }


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Card
        fields = '__all__'

    def update(self, instance, validated_data):
        new_order = validated_data.get('sort_order')
        new_list = validated_data.get('list')
        if new_order is not None and new_list is not None:
            if new_list.id == instance.list.id:
                modifications = models.Card.objects.filter(list=instance.list).exclude(id=instance.id)
                up = modifications.filter(sort_order__gt=instance.sort_order, sort_order__lte=new_order)
                down = modifications.filter(sort_order__gte=new_order, sort_order__lt=instance.sort_order)

            else:
                modifications = models.Card.objects.exclude(id=instance.id)
                up = modifications.filter(sort_order__gt=instance.sort_order, list=instance.list)
                down = modifications.filter(sort_order__gte=new_order, list=new_list)

            for c in up:
                c.sort_order -= 1
                c.save()

            for c in down:
                c.sort_order += 1
                c.save()

        return super().update(instance, validated_data)


# TODO: Lazy loading
class DetailListSerializer(serializers.ModelSerializer):
    cards = serializers.SerializerMethodField()

    def get_cards(self, obj):
        serializer = CardSerializer(models.Card.objects.filter(list=obj), many=True)
        return serializer.data

    class Meta:
        model = models.List
        fields = '__all__'


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Board
        fields = ('id', 'title')

    def create(self, validated_data):
        obj = models.Board.objects.create(**validated_data)
        obj.owners.add(self.context.get('request').user)
        obj.save()
        return obj


class DetailBoardSerializer(serializers.ModelSerializer):
    lists = serializers.SerializerMethodField()

    def get_lists(self, obj):
        serializer = DetailListSerializer(models.List.objects.filter(board=obj), many=True)
        return serializer.data

    class Meta:
        model = models.Board
        fields = '__all__'
        read_only_fields = ('owners',)
