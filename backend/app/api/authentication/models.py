from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150)
    phone_no = models.CharField(max_length=15, blank=True, null=True)
    password = models.CharField(max_length=150)  # Will store hashed password

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['username']

    # Map this model to the `users` table in PostgreSQL
    class Meta:
        app_label = 'api'
        db_table = 'users'  # This ensures the model uses the `users` table
