from django.urls import path
from .views import (
    CategoryListCreate, CategoryRetrieveUpdateDelete,
    NoteListCreate, NoteRetrieveUpdateDelete
)

urlpatterns = [
    # Categories
    path('categories/', CategoryListCreate.as_view()),            # GET (list), POST (create)
    path('categories/<int:pk>/', CategoryRetrieveUpdateDelete.as_view()),  # GET, PUT, DELETE

    # Notes
    path('notes/', NoteListCreate.as_view()),                     # GET (list), POST (create)
    path('notes/<int:pk>/', NoteRetrieveUpdateDelete.as_view()), # GET, PUT, DELETE
]
