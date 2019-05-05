from rest_framework import serializers
from . import models

class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ('email', 'username')


class BoardSerializers(serializers.ModelSerializer):



    @property
    def user(self, obj):
        request = self.context.get('request', None)
        print ('request12', request)
        if request:
            return request.user

    class Meta:
        model = models.Board
        fields =  ('name', )


class TaskSerializers(serializers.ModelSerializer):
    class Meta:

        model = models.Task
        fields = ('name', 'descriptions', 'boards')


