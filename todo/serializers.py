from rest_framework import serializers
from . import models


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


class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Task
        fields = ('id', 'name', 'description', 'board')
