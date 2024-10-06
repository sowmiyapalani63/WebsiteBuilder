
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateElementProperties } from '../redux/websiteSlice'; 

const ElementForm = ({ selectedElement }) => {
  const dispatch = useDispatch();
  const [properties, setProperties] = useState(selectedElement);

  const handleChange = (e) => {
    setProperties({ ...properties, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    dispatch(updateElementProperties(properties));
  };

  return (
    <form className="p-4">
      {properties.type === 'text' && (
        <div>
          <label>Text Content:</label>
          <input
            type="text"
            name="content"
            value={properties.content || ''}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
      )}
      {properties.type === 'image' && (
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="src"
            value={properties.src || ''}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
      )}
      {/* Add more fields for other types */}
      <button type="button" onClick={handleSave} className="mt-4 bg-blue-500 text-white p-2">
        Save
      </button>
    </form>
  );
};

export default ElementForm;
