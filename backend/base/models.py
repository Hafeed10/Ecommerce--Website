from django.db import models

class Item(models.Model):
    image = models.ImageField(null=True, blank=True, upload_to="images/")
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    loop_just = models.CharField(max_length=255, null=True, blank=True)
    description = models.CharField(max_length=200, default='No description available')

    def __str__(self):
        return self.name
