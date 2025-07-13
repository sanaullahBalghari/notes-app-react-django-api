import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [editNote, setEditNote] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="flex flex-row gap-6">
          <NoteForm editNote={editNote} setEditNote={setEditNote} triggerRefresh={triggerRefresh} />
          <NoteList setEditNote={setEditNote} refresh={refresh} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
