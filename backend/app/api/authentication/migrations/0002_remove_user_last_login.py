# Generated by Django 5.1.4 on 2025-01-03 13:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='last_login',
        ),
    ]