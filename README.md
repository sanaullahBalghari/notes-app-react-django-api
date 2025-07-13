# Notes-app-react-django-api
Connect Frontend and Backend 

This is a full-stack **Notes Application** built using **React** for the frontend and **Django (Django REST Framework)** for the backend.

---

#Features

- Add, update, and delete notes
- Each note has a category (Work, Personal, Study)
- Notes stored in a Django database via REST API
- Frontend and backend are fully connected
- Clean UI with Tailwind CSS styling

---

##Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (default Django DB)

---

##Frontend–Backend Integration

- Django provides a RESTful API at `/api/notes/`
- React fetches data from this API using `fetch()` or `axios`
- Note data includes title, content, and category
- React sends POST/PUT/DELETE requests to Django API to modify notes

---

## Getting Started

### Backend (Django)

```bash
cd notes-backend
python -m venv env
source env/bin/activate  # or env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
## note after create new note and update note refresh the page to see changes 
