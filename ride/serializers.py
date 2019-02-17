from rest_framework import serializers, viewsets
from ride.models import Ride


class RideSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ride
        fields = ("datetime_from", "datetime_to")


class RideViewSet(viewsets.ModelViewSet):
    queryset = Ride.objects.all()
    serializer_class = RideSerializer
