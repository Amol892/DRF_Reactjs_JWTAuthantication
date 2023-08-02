from django.contrib import admin
from .models import Project_details
# Register your models here.
class Project_details_Admin(admin.ModelAdmin):
    list_diaplay = ['id','project_name','project_lead','weeks','remaining_weeks','project_status']
    
admin.site.register(Project_details,Project_details_Admin)