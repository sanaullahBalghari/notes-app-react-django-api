
import React, { useEffect, useState } from 'react';
import API from '../services/api';

function NoteList({ setEditNote  }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    API.get('notes/')
      .then(res => setNotes(res.data))
      .catch(err => console.log('Error:', err));
  };

  const handleDelete = (id) => {
  if (window.confirm('Are you sure you want to delete this note?')) {
    API.delete(`notes/${id}/`)
      .then(() => {
       
        fetchNotes(); // refresh list after deletion
      })
      .catch(err => console.error('Delete error:', err));
  }
};


  return (
   <div className="flex-1 bg-white p-4 rounded shadow max-h-[500px] overflow-y-auto">
  <h2 className="text-lg font-bold mb-4">Saved Notes</h2>
  {notes.map((note) => (
    <div key={note.id} className="border-b py-2 mb-2">
      <h3 className="font-semibold">{note.title}</h3>
      <p className="text-sm text-gray-700">{note.content}</p>
      <p className="text-xs text-gray-500 italic">Category: {note.category_name}</p>
      <div className="mt-2 space-x-2">
        <button onClick={() => setEditNote(note)} className="text-blue-600">Edit</button>
        <button onClick={() => handleDelete(note.id)} className="text-red-600">Delete</button>
      </div>
    </div>
  ))}
</div>

  );
}

export default NoteList;
