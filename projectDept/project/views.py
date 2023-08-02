import datetime
from django.shortcuts import get_object_or_404, render
from rest_framework.views import APIView
from .models import Project_details
from .Serializers import ProjectSerializer
from rest_framework.response import Response
from rest_framework import status
import logging
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated,IsAuthenticatedOrReadOnly
# Create your views here.

logger = logging.getLogger('django')

class ProjectAPI(APIView):
    authentication_classes = [JWTAuthentication,]
    permission_classes =  [IsAuthenticatedOrReadOnly]
    def get(self,request):
        p_obj = Project_details.objects.all()
        serializer=ProjectSerializer(p_obj,many=True)
        logger.info("All Project record fetched")
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    def post(self,request):
        serializer=ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info("New Project records added")
            
            return Response(data=serializer.data,status=status.HTTP_201_CREATED)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class ModifyAPI(APIView):
    authentication_classes = [JWTAuthentication,]
    permission_classes =  [IsAuthenticatedOrReadOnly]
    
    def get(self,request,pk=None):
        obj=get_object_or_404(Project_details,pk=pk)
        serializer=ProjectSerializer(obj)
        logger.info("Project record fetched")
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    def put(self,request,pk=None):
        obj=get_object_or_404(Project_details,pk=pk)
        serializer=ProjectSerializer(data=request.data,instance=obj)
        if serializer.is_valid():
            logger.info("Project records updated")
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def patch(self,request,pk=None):
        obj=get_object_or_404(Project_details,pk=pk)
        serializer=ProjectSerializer(data=request.data,instance=obj,partial=True)
        if serializer.is_valid():
            serializer.save()
            logger.info("Project records updated")
            return Response(data=serializer.data,status=status.HTTP_205_RESET_CONTENT)
        return Response(data=serializer.errors,status=status.HTTP_400_BAD_REQUEST)        
    
    def delete(self,request,pk=None):
        obj=get_object_or_404(Project_details,pk=pk)
        logger.info("Project records deleted")
        obj.delete()
        return Response(data={'data deleted'},status=status.HTTP_204_NO_CONTENT)