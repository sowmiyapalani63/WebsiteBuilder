
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWebsiteDetails } from '../redux/websiteSlice';
import SectionCustomizer from './SectionCustomizer'; 

const WebsiteDetailsForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    subdomain: '',
    countryCode: '',
    phoneNumber: '',
    city: '',
    address: '',
    postalCode: '',
    showAddress: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    dispatch(setWebsiteDetails(formData));


    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Website Details</h2>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Website Title"
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
          
          <select 
            name="category" 
            value={formData.category}
            onChange={handleChange} 
            required 
            className="border rounded p-2 w-full"
          >
            <option value="">Select Category</option>
            <option value="business">Business</option>
            <option value="personal">Personal</option>
            <option value="ecommerce">E-commerce</option>
            
          </select>

          <input
            type="text"
            name="subdomain"
            value={formData.subdomain}
            placeholder="Website Subdomain"
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
          
          <input
            type="text"
            name="countryCode"
            value={formData.countryCode}
            placeholder="Country Code"
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />

          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
          
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="City"
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
          
          <textarea
            name="address"
            value={formData.address}
            placeholder="Postal Address"
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />

          <input
            type="number"
            name="postalCode"
            value={formData.postalCode}
            placeholder="Postal Code"
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />

          <label className="flex items-center">
            <input
              type="checkbox"
              name="showAddress"
              checked={formData.showAddress}
              onChange={handleChange}
              className="mr-2"
            />
            Display Address on Website
          </label>

          <button 
            type="submit" 
            className="btn bg-blue-500 text-white px-4 py-2 rounded">
            Continue to Customize Sections
          </button>
        </form>
      ) : (
        <SectionCustomizer />
      )}
    </div>
  );
};

export default WebsiteDetailsForm;
