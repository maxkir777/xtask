from django.urls import path, re_path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt import views as jwt_views
from todo.views import BoardViewSet, TaskViewSet, ListViewSet
from . import views

from rest_auth.registration.views import VerifyEmailView, RegisterView


router = DefaultRouter()
router.register(r'boards', BoardViewSet, basename='boards')
router.register(r'lists', ListViewSet, basename='list')
router.register(r'tasks', TaskViewSet, basename='tasks')

urlpatterns = router.urls

extended_urlpatterns = [
    path('', views.UserListView.as_view()),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

    path('registration/', RegisterView.as_view(), name='account_signup'),
    re_path(r'^account-confirm-email/', VerifyEmailView.as_view(),
         name='account_email_verification_sent'),
    re_path(r'^account-confirm-email/(?P<key>[-:\w]+)/$', VerifyEmailView.as_view(),
         name='account_confirm_email'),
]

urlpatterns.extend(extended_urlpatterns)
