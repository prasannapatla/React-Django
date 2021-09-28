from django.shortcuts import render
from .models import product
from .serializers import productSerializers
from rest_framework import serializers, viewsets

# Create your views here.

class productView(viewsets.ModelViewSet):
    queryset =product.objects.all()
    serializer_class=productSerializers
