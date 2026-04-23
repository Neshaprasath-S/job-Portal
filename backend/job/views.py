from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import JobSerializer, registerSerializer, ApplicationSerializer
from  rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import JobModels, Application
from django.shortcuts import get_object_or_404



@api_view(['GET'])
def job_list(request):
    jobs=JobModels.objects.all()
    serializer=JobSerializer(jobs, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def job_detail(request, job_id):
    job = get_object_or_404(JobModels, id=job_id)
    serializer = JobSerializer(job)
    return Response(serializer.data)

@api_view(['POST'])
def register_user(request):
    serializer = registerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_user(request):
    username=request.data.get('username')
    password=request.data.get('password')
   
    user= authenticate(username=username, password=password)
    #return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    if user is not None:
        return Response({"user_id": user.id, "username": user.username, "message": "Login successful"}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
   

@api_view(['POST'])
def apply_job(request):
   
    serializer = ApplicationSerializer(data=request.data)
    job_id=request.data.get('job')
    applicant_id=request.data.get('applicant')
   

    if Application.objects.filter(job_id=job_id, applicant_id=applicant_id).exists():
        return Response({'message': 'You have already applied for this job'}, status=status.HTTP_400_BAD_REQUEST) 
    
   

    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Application submitted successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



