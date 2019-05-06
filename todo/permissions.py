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
        return obj.owner == request.user


class IsOwnerBoards(permissions.BasePermission):

    def has_permission(self, request, view):

        #TODO request.data.board id of board
        #TODO models.boards.objects.get(id== board.id) value = board
        #TODO check users into request.user.id user which writen and want make
        #TODO if request.user.id inside board.users after return true else false

        board_id = request.data['boards']
        board = models.Board.objects.get(id=board_id)
        if board.user.filter(id__exact=request.user.id):
            return True
