from django.db import models

# Create your models here.

class Category(models.Model):
    name=models.CharField(max_length=100, unique=True);

   
    def __str__(self):
        return self.name
    

class Note(models.Model):
    title=models.CharField(max_length=200);
    content=models.TextField()
    category=models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at=models.DateField(auto_now=True);

    def __str__(self):
        return self.title