from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as jwt_views
from todo.views import BoardViewSet, TaskViewSet
from . import views

router = DefaultRouter()
router.register(r'boards', BoardViewSet, basename='boards')
router.register(r'tasks', TaskViewSet, basename='tasks')
urlpatterns = router.urls

extended_urlpatterns = [
    path('', views.UserListView.as_view()),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns.extend(extended_urlpatterns)
