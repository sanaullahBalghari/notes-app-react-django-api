from django.shortcuts import render
from rest_framework import generics
from .models import Note , Category

from .serializers import NoteSerializer, CategorySerializer
# Create your views here.


class CategoryListCreate(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class = CategorySerializer



class CategoryRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class NoteListCreate(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer