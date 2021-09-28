
from django.db import models

# Create your models here.
class product(models.Model):
    name=models.CharField(max_length=20)
    description =models.TextField()
    price=models.IntegerField()
    category =models.CharField(max_length=20)
    image=models.ImageField(upload_to='images')

    def __str__(self):
        return self.name
        