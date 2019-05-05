from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.UserListView.as_view()),
    path('boards/', views.BoardListView.as_view()),
    path('task/', views.TaskListView.as_view())
]