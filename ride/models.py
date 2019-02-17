from django.db import models
from django.utils.formats import date_format, time_format


# Create your models here.
class Ride(models.Model):
    datetime_from = models.DateTimeField(verbose_name="Datum von")
    datetime_to = models.DateTimeField(verbose_name="Datum bis")

    class Meta:
        verbose_name = 'Fahrt'
        verbose_name_plural = 'Fahrten'

    def __str__(self):
        datetime_from = f"{date_format(self.datetime_from)} {time_format(self.datetime_from)}"
        datetime_to = f"{date_format(self.datetime_to)} {time_format(self.datetime_to)}"
        return f"{datetime_from} - {datetime_to}"
