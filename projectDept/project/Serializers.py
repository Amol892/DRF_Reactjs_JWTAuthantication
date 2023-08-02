import datetime
from rest_framework import serializers
from .models import Project_details

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project_details
        fields='__all__'
        
        
    def create(self, validated_data):
        start_date = validated_data['project_start_date']
        end_date = validated_data['project_delivery_date']
        current_date = datetime.date.today()
        validated_data['weeks']=(str((end_date-start_date)//7).split(',')[0].strip().split()[0])
        validated_data['remaining_weeks']= (str((end_date-current_date)//7).split(',')[0].strip().split()[0])
        
        return super().create(validated_data)
        
    def update(self, instance, validated_data):
        start_date = validated_data.get('project_start_date',instance.project_start_date)
        end_date = validated_data.get('project_delivery_date',instance.project_delivery_date)
        current_date = datetime.date.today()
        instance.weeks=(str((end_date-start_date)//7).split(',')[0].strip().split()[0])
        instance.remaining_weeks = (str((end_date-current_date)//7).split(',')[0].strip().split()[0])
        return super().update(instance, validated_data)    