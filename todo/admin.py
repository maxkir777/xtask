from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import UsersCreationForm, UsersChangeForm
from .models import User, Board, Task

class CustomUserAdmin(UserAdmin):
    add_form = UsersCreationForm
    form = UsersChangeForm
    model = User
    list_display = ['email', 'username', 'name',]

class BoardAdmin(admin.ModelAdmin):
    list_display = ('name', )

class TaskAdmin(admin.ModelAdmin):
    list_display = ('name', 'descriptions')

admin.site.register(User, CustomUserAdmin)
admin.site.register(Board, BoardAdmin)
admin.site.register(Task, TaskAdmin)

# Register your models here.
