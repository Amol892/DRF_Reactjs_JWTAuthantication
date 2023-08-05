from django.conf import settings
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.contrib import messages


User= get_user_model()

class registerUser(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email', 'landmark', 'address', 'city', 'state', 'country', 'gender', 'phone_number')
        
    def create(self, validated_data):
        email = validated_data['email']
        username = validated_data['username']
        user = User.objects.create_user(**validated_data)
        user.is_active = False
        user.save()
        #Activation token generation
        token =default_token_generator.make_token(user)
        
        #Encode the users primary key and token as a URL base64 string
        uid= urlsafe_base64_encode(force_bytes(user.pk))
        #token = urlsafe_base64_encode(force_bytes(token))
        
        #Domain
        request = self.context.get('request') 
        domain = get_current_site(request)
        
        print(domain)
        
        #Activation link 
        activation_link = f'http://localhost:3000/activate/{uid}/{token}/'
        print(activation_link)
        #Email structure elements
        Subject='Activate your account'
        message = f'Hi {username} \n\n Thank you for registering, please use following link to activate your account.\n{activation_link}'
        from_email = settings.EMAIL_HOST_USER
        to_email = [email]
        send_mail(Subject,message,from_email,to_email)
        
    
        return user