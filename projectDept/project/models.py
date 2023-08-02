from django.db import models

# Create your models here.

class Project_details(models.Model):
    project_name = models.CharField(max_length=50)
    project_description = models.CharField(max_length=256)
    project_lead = models.CharField(max_length=50)
    team_size=models.PositiveIntegerField()
    programming_langauge =models.CharField(max_length=100)
    project_start_date=models.DateField()
    project_delivery_date=models.DateField()
    weeks=models.CharField(max_length=2,blank=True)
    remaining_weeks=models.CharField(max_length=2,blank=True)
    project_status = models.CharField(max_length=20)
    
    
    def __str__(self):
        return self.project_name