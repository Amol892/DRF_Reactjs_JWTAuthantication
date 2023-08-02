from rest_framework import serializers
from django.contrib.auth import get_user_model


User= get_user_model()

class registerUser(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email', 'landmark', 'address', 'city', 'state', 'country', 'gender', 'phone_number')
        
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)