from django.urls import path
from . import views
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView)

urlpatterns = [
    path('api-token/', TokenObtainPairView.as_view()),
    path('api-token-refresh/', TokenRefreshView.as_view()),
    path('', views.story_detail),
    path('<int:pk>', views.story_detail),
    path('storyline/<int:pk>/', views.storyline_detail),
    path('restart/<int:s_pk>/<int:pk>', views.storyline_restart)
]