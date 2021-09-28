from django.urls import path,include
from . import views
from rest_framework import routers
# from rest_framework.routers import DefaultRouter

router = routers.DefaultRouter()
router.register('',views.productView,basename='productview')

urlpatterns = [
    path('api/',include(router.urls))
    ]
