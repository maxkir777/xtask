from rest_framework import generics, permissions, viewsets
from todo.permissions import IsOwnerOrReadOnly, IsOwnerBoards, IsOwnerLists
from . import models
from . import serializers
from rest_framework.response import Response
from rest_framework.decorators import detail_route

class UserListView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializers


class BoardViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    queryset = models.Board.objects.all()
    serializer_class = serializers.BoardSerializers

    def list(self, request, *args, **kwargs):
        return Response(self.serializer_class(
            self.queryset.filter(users__in=[request.user]),
            many=True).data)


class ListViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly, IsOwnerBoards)
    queryset = models.List.objects.all()
    serializer_class = serializers.ListSerializers

class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly, IsOwnerLists)
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializers

# Create your views here.
