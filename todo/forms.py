from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User

class UsersCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = User
        fields = ('username', 'email')

class UsersChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = UserChangeForm.Meta.fields