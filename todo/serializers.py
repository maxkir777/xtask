from rest_framework import serializers
from . import models


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('email', 'username')


class BoardSerializers(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    def get_user(self, instance):
        return self.context['request'].user.id

    class Meta:
        model = models.Board
        fields = ('id', 'name', 'user')


class TaskSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Task
        fields = ('name', 'descriptions', 'boards')
