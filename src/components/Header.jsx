

import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
  };

  return (
    <header className="bg-blue-700 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-white text-2xl font-bold">Website Builder</h1>
        <nav className="space-x-4">
          <a href="/" className="text-white hover:underline">Home</a>
          <a href="/about" className="text-white hover:underline">About</a>
          <a href="/contact" className="text-white hover:underline">Contact</a>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 text-white px-4 py-2 rounded transition duration-300 hover:bg-red-500"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
