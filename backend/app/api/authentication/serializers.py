from rest_framework import serializers
from .models import User
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'phone_no', 'password']
        extra_kwargs = {
            'password': {'write_only': True}  # Prevent the password from being returned
        }

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])  # Hash the password
        return super().create(validated_data)


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
