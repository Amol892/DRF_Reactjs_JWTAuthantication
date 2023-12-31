"""
URL configuration for projectDept project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework_simplejwt.views import token_obtain_pair,token_refresh
from django.views.generic import RedirectView
from accounts.views import Account_activation_API

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/',include('accounts.urls')),
    path('access/',token_obtain_pair),
    path('refresh/',token_refresh),
    path('department/',include('project.urls')),
    path('activate/<str:uid>/<str:token>/',Account_activation_API.as_view(),name='activate'),
    path('active_success/',RedirectView.as_view(url='http://localhost:3000/accountactivation/'),name='activation_success')
    
]
