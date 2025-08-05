# from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from .models import IPO
from .serializers import IPOSerializer

class IPOViewSet(viewsets.ModelViewSet):
    queryset = IPO.objects.all()
    serializer_class = IPOSerializer
    permission_classes = [permissions.AllowAny]