from django.urls import path
from . import views

urlpatterns = [
    path('', views.storyline_list),
    path('<int:pk>/', views.storyline_detail),
]