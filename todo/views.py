from rest_framework import generics, permissions, viewsets
from todo.permissions import IsOwnerOrReadOnly, IsOwnerBoards, IsOwnerLists
from . import models
from . import serializers
from rest_framework.response import Response
from rest_framework.decorators import action


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
        return Response(
            self.serializer_class(self.queryset.filter(users__in=[request.user]), many=True)
                .prefetch_related('lists')
                .data
        )

    @action(detail=True, methods=['post'])
    def lists(self, request, *args, **kwargs):
        board = self.get_object()

        if request.method == 'POST':
            new_list = models.List.objects.create(**request.data)
            board.lists.add(new_list)
            board.save()
            return Response(status=200)

class ListViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    queryset = models.List.objects.all()
    serializer_class = serializers.ListSerializers


class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializers

# Create your views here.
