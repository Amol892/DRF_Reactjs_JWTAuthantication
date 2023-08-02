from rest_framework.urls import path 
from .views import ProjectAPI,ModifyAPI

urlpatterns = [
    path('projectdetails/',ProjectAPI.as_view()),
    path('projectdetails/<int:pk>/',ModifyAPI.as_view())
]
