from rest_framework import serializers
from . import models
from rest_auth.registration.serializers import RegisterSerializer


class CustomRegisterSerializer(RegisterSerializer):
    email = serializers.EmailField(required=True)

    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()

        return {
            'email': self.validated_data.get('email', ''),
        }


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('email', 'username')


class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Task
        fields = ('id', 'name', 'description',)


class ListSerializers(serializers.ModelSerializer):
    tasks = TaskSerializers(read_only=True)

    class Meta:
        model = models.List
        fields = ('id', 'name', 'tasks')

    def create(self, validated_data):
        obj = models.List.objects.create(**validated_data)
        obj.boards.objects.add(self.context['request'].list)
        obj.save()
        return obj


class BoardSerializers(serializers.ModelSerializer):
    lists = serializers.SerializerMethodField()

    def get_lists(self, obj):
        serializer = ListSerializers(models.List.objects.filter(boards=obj), many=True)
        return serializer.data

    class Meta:
        model = models.Board
        fields = ('id', 'name', 'lists')

    def create(self, validated_data):
        obj = models.Board.objects.create(**validated_data)
        obj.users.add(self.context['request'].user)
        obj.save()
        return obj
