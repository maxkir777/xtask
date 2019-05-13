from django.contrib import admin
from .models import User, Board, Card, List


admin.site.register(User)
admin.site.register(Board)
admin.site.register(List)
admin.site.register(Card)

# Register your models here.
