// src/components/NoteForm.js
import React, { useEffect, useState } from 'react';
import API from '../services/api';

function NoteForm({ editNote, setEditNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get('categories/')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
      setCategory(editNote.category);
    }
  }, [editNote]);

  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategory('');
    setEditNote(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title,
      content,
      category,
    };

    if (editNote) {
      // update mode
      API.put(`notes/${editNote.id}/`, data)
        .then(() => {
          alert('Note updated!');
          resetForm();
        })
        .catch(err => console.log('Update error:', err));
    } else {
      // create mode
      API.post('notes/', data)
        .then(() => {
          alert('Note created!');
          resetForm();
        })
        .catch(err => console.log('Create error:', err));
    }
  };

  return (

<div className="w-full max-w-md bg-white p-4 rounded shadow">
 
    <form onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">
        {editNote ? 'Edit Note' : 'Add Note'}
      </h2>

      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="border px-2 py-1 mb-2 block w-full"
      />

      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
        className="border px-2 py-1 mb-2 block w-full"
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
        className="border px-2 py-1 mb-2 block w-full"
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded mr-2"
      >
        {editNote ? 'Update Note' : 'Add Note'}
      </button>

      {editNote && (
        <button
          type="button"
          onClick={resetForm}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      )}
    </form>
    </div>
  );
}

export default NoteForm;
