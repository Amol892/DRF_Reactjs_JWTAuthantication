from rest_framework.urls import path 
from .views import ProjectAPI,ModifyAPI

urlpatterns = [
    path('projectdetails/',ProjectAPI.as_view(),name='home_url'),
    path('projectdetails/<int:pk>/',ModifyAPI.as_view())
]
