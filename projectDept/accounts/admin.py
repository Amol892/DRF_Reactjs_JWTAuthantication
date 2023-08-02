from django.contrib import admin
from django.contrib.auth import models
from .models import User
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ['email','password','username','first_name','last_name']
    
    
admin.site.register(User,UserAdmin)