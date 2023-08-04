from django.http import HttpResponse
from django.shortcuts import redirect, render
from rest_framework.views import APIView
from .Serializers import registerUser
from .models import User
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.contrib import messages
from rest_framework.decorators import api_view
# Create your views here.

class RegisterAPI(APIView):
    
    def get(sef,request):
        user_obj = User.objects.all()
        serializer = registerUser(user_obj,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer=registerUser(data=request.data,context={'request': request})
        if serializer.is_valid():
            
            serializer.save()
            messages.success(request,"Your account is created")
            return Response(data=serializer.data,status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class Account_activation_API(APIView):
    
    def get(self,request,uid,token):
        
        uid = force_bytes(urlsafe_base64_decode(uid))
        if uid and token:
            try:
                print(uid)
                user = User.objects.get(pk=uid)
            except (TypeError, ValueError, OverflowError, User.DoesNotExist):
                return Response({'message': 'Invalid activation link'}, status=status.HTTP_400_BAD_REQUEST)
            
        if user is not None and default_token_generator.check_token(user, token):
                user.is_active = True
                user.save()
                return redirect('activation_success')
            
        return Response({'message': 'Invalid activation token'}, status=status.HTTP_400_BAD_REQUEST)