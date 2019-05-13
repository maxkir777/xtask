from rest_framework import permissions
from . import models


class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True
        # Write permissions are only allowed to the owner of the snippet.
        if obj.users.filter(id__exact=request.user.id):
            return True


class IsOwnerBoards(permissions.BasePermission):

    def has_permission(self, request, view):
        board_id = request.data['board']
        board = models.Board.objects.get(id=board_id)
        if board.users.filter(id__exact=request.user.id):
            return True


class IsOwnerLists(permissions.BasePermission):

    def has_permission(self, request, view):

        lists_id = request.data['list']
        lists = models.List.objects.get(id=lists_id)
        if lists.board.users.filter(id__exact=request.user.id):
            return True
        else:
            return False
