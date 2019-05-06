from django.shortcuts import render
from rest_framework import generics, permissions, status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from todo.permissions import IsOwnerOrReadOnly

from . import models
from . import serializers


class UserListView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializers


class BoardViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    queryset = models.Board.objects.all()
    serializer_class = serializers.BoardSerializers


class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializers

# Create your views here.
