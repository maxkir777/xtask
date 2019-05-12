from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField(blank=True, max_length=255)

    def __str__(self):
        return str(self.id)


class Task(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return str(self.id)


class List(models.Model):
    name = models.CharField(max_length=200)
    tasks = models.ForeignKey(Task, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.id)


class Board(models.Model):
    name = models.CharField(max_length=200)
    users = models.ManyToManyField(User)
    lists = models.ManyToManyField(List)

    def __str__(self):
        return str(self.id)

# Create your models here.
