from django.urls import path
from .views import UserRegistrationView, UserLoginView, UserDetailView, UserUpdateView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('user/<str:user_id>/', UserDetailView.as_view(), name='user-detail'),
    path('user/<str:user_id>/update/', UserUpdateView.as_view(), name='user-update'),
]
