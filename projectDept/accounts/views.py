from django.shortcuts import render
from rest_framework.views import APIView
from .Serializers import registerUser
from .models import User
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

class RegisterAPI(APIView):
    
    def get(sef,request):
        user_obj = User.objects.all()
        serializer = registerUser(user_obj,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer=registerUser(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    