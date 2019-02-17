from django.urls import path
from django.conf.urls import include, url
from rest_framework import routers
from ride.serializers import RideViewSet

router = routers.DefaultRouter()
router.register(r"rides", RideViewSet)

urlpatterns = [
    url(r'', include(router.urls)),
]
