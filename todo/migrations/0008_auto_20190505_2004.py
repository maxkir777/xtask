# Generated by Django 2.2.1 on 2019-05-05 20:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0007_auto_20190505_2001'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='board',
            name='user',
        ),
        migrations.AddField(
            model_name='board',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
