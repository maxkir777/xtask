from django.contrib.auth.models import AbstractUser
from django.db import models



class User(AbstractUser):
    name = models.CharField(blank=True, max_length=255)

    def __str__(self):
        return str(self.id)


class Board(models.Model):
    name = models.CharField(max_length=200)
    users = models.ManyToManyField(User)

    def __str__(self):
        return str(self.id)

class List(models.Model):
    name = models.CharField(max_length=200)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.id)

class Task(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    list = models.ForeignKey(List, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.id)

# Create your models here.
