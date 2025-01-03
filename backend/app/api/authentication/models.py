from django.contrib.auth.base_user import BaseUserManager
from django.db import models
import uuid

class CustomBaseUser(models.Model):
    id = models.CharField(
        primary_key=True,
        max_length=36,
        default=uuid.uuid4,
        editable=False
    )  # Use UUID for a text-based unique identifier
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    phone_no = models.CharField(max_length=15, blank=True, null=True)
    password = models.CharField(max_length=150)  # Hashed password will be stored here

    class Meta:
        abstract = True

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, phone_no, password=None):
        if not email:
            raise ValueError("The Email field must be set")
        if not username:
            raise ValueError("The Username field must be set")

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, phone_no=phone_no)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, phone_no, password=None):
        user = self.create_user(email, username, phone_no, password)
        user.save(using=self._db)
        return user

class User(CustomBaseUser):
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'phone_no']

    def __str__(self):
        return self.email

    class Meta:
        app_label = 'authentication'
        db_table = 'users'
