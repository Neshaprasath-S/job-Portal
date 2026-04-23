from django.urls import path
from . import views 

urlpatterns = [
    path('jobs/', views.job_list, name='job_list'), 
    path('register/', views.register_user, name='register_user'),
    path('login/', views.login_user, name='login_user'),
    path('apply/', views.apply_job, name='apply_job'),
    path("jobdetail/<int:job_id>/", views.job_detail, name="job_detail"),
      
]