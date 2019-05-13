from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id)


class Board(models.Model):
    title = models.CharField(max_length=200)
    owners = models.ManyToManyField(User)
    public = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)


class List(models.Model):
    title = models.CharField(max_length=200)
    board = models.ForeignKey(Board, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)


class Card(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    list = models.ForeignKey(List, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)

# Create your models here.
