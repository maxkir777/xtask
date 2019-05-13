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


# TODO: Get cards = serializers.SerializerMethodField()
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
