from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IPOViewSet

router = DefaultRouter()
router.register('ipos', IPOViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
# python manage.py runserver 10.40.127.71:8000