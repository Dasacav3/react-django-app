from django.db import models

class Company(models.Model):
    id=models.AutoField(primary_key=True)
    nit=models.CharField(max_length=100)
    name=models.CharField(max_length=100)
    address=models.CharField(max_length=100)
    phone=models.BigIntegerField()
    email=models.EmailField(default="")
    password=models.CharField(max_length=255, default="")

    def __str__(self):
        text = "{0} ({1})"
        return text.format(self.name,self.nit)
        