

import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
    };

    dispatch(registerUser(userDetails));
    navigate('/website-detail');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-red p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" 
            placeholder="Enter your name" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" 
            placeholder="Enter your email" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="phoneNumber">Phone Number</label>
          <input 
            type="text" 
            name="phoneNumber" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" 
            placeholder="Enter your phone number" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            required 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500" 
            placeholder="Enter your password" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
