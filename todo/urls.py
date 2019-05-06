from django.urls import include, path
from rest_framework.routers import DefaultRouter

from todo.views import BoardViewSet, TaskViewSet
from . import views

router = DefaultRouter()
router.register(r'boards', BoardViewSet, basename='attractions')
router.register(r'task', TaskViewSet, basename='categories')
urlpatterns = router.urls

extended_urlpatterns = [
    path('', views.UserListView.as_view()),
]

urlpatterns.extend(extended_urlpatterns)
