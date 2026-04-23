from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class JobModels(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=100 ,blank=True, null=True)
    salary_range = models.CharField(max_length=50)
    posted_date = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)


class Application(models.Model):
    status_choices = [
        ('pending', 'Pending'), 
        ('accepted', 'Accepted'), 
        ('rejected', 'Rejected'),
    ]
    
    job = models.ForeignKey(JobModels, on_delete=models.CASCADE)
    applicant = models.ForeignKey(User, on_delete=models.CASCADE)
    #resume = models.FileField(upload_to='resumes/')
    status = models.CharField(max_length=10, choices=status_choices, default='pending')
    applied_date = models.DateTimeField(auto_now_add=True)

    