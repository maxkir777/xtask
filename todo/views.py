from rest_framework import generics, permissions, viewsets
from todo.permissions import IsOwnerOrReadOnly, IsOwnerBoards, IsOwnerLists
from . import models
from . import serializers
from rest_auth.registration.views import RegisterView




class UserListView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializers

class Register(RegisterView):
    queryset = models.User.objects.all()
    serializer_class = serializers.CustomRegisterSerializer



class BoardViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    queryset = models.Board.objects.all()
    serializer_class = serializers.BoardSerializers


class ListViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly, IsOwnerBoards)
    queryset = models.List.objects.all()
    serializer_class = serializers.ListSerializers

class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly, IsOwnerLists)
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializers

# Create your views here.
