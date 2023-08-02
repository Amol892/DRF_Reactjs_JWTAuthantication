from django.db import models
from django.contrib.auth.models import AbstractBaseUser,AbstractUser
# Create your models here.

class User(AbstractUser):
    email=models.EmailField(unique=True)
    phone_number=models.CharField(max_length=12,null=True,blank=True)
    gender=models.CharField(max_length=20,null=True,blank=True)
    address=models.CharField(max_length=100,null=True,blank=True)
    landmark=models.CharField(max_length=100,null=True,blank=True)
    country=models.CharField(max_length=20,null=True,blank=True)
    state=models.CharField(max_length=20,null=True,blank=True)
    city=models.CharField(max_length=20,null=True,blank=True)
    pincode=models.CharField(max_length=6,null=True,blank=True)
    
    
    
    def __str__(self):
        return self.email
    
    
    
