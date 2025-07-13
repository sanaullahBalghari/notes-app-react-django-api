import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Notes App</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
