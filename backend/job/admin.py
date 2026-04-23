from django.contrib import admin

# Register your models here.
from .models import Application, JobModels
admin.site.register(JobModels)
admin.site.register(Application)    

