from django.contrib import admin
from .models import User, Board, Task, List


admin.site.register(User)
admin.site.register(Board)
admin.site.register(List)
admin.site.register(Task)

# Register your models here.
