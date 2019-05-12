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


class BoardSerializers(serializers.ModelSerializer):


    class Meta:
        model = models.Board
        fields = ('id', 'name')

    def create(self, validated_data):
        obj = models.Board.objects.create(**validated_data)
        obj.users.add(self.context['request'].user)
        obj.save()
        return obj

class ListSerializers(serializers.ModelSerializer):

    class Meta:
        model = models.List
        fields = ('id', 'name', 'board')


    def create(self, validated_data):
        obj = models.List.objects.create(**validated_data)
        obj.board.users.add(self.context['request'].user)
        obj.save()
        return obj


class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Task
        fields = ('id', 'name', 'description', 'list')
