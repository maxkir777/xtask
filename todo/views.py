from rest_framework import generics, permissions, viewsets, status
from todo.permissions import IsOwnerOrReadOnly, IsOwnerBoards, IsOwnerLists
from . import models
from . import serializers
from rest_framework.response import Response


# TODO: Review
class UserListView(generics.ListCreateAPIView):
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class BoardViewSet(viewsets.ModelViewSet):
    # TODO: def get_permissions: allow any for retrieve if board.public = True
    # TODO: check owner
    permission_classes = (permissions.IsAuthenticated,)
    queryset = models.Board.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.BoardSerializer
        if self.action == 'retrieve':
            return serializers.DetailBoardSerializer
        return serializers.BoardSerializer

    def list(self, request, *args, **kwargs):
        return Response(self.get_serializer(self.get_queryset().filter(owners__in=[request.user]), many=True).data)


# TODO: Turn of creating new obj
class ListViewSet(viewsets.ModelViewSet):
    # TODO: check owner
    permission_classes = (permissions.IsAuthenticated,)
    queryset = models.List.objects.all()

    # TODO: def get_serializer_class
    serializer_class = serializers.DetailListSerializer


class CardViewSet(viewsets.ModelViewSet):
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)
    queryset = models.Card.objects.all()
    serializer_class = serializers.CardSerializer

# Create your views here.
