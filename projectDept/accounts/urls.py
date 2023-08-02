from rest_framework.urls import path 
from .views import RegisterAPI


urlpatterns = [
    path('register/',RegisterAPI.as_view())
]
