
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DraggableItem from './builder/DraggableItem';
import DropZone from './builder/DropZone';
import ElementForm from './ElementForm';
import { setWebsiteDetails,addElement } from '../redux/websiteSlice';

const WebsiteBuilder = () => {
  const dispatch = useDispatch();
  const websiteDetails = useSelector((state) => state.website);

  const handleElementDrop = (element) => {
    dispatch(addElement(element));
  };

  return (
    <div className="website-builder">
      <h2 className="text-2xl font-bold">Drag and Drop Website Builder</h2>
      
      <div className="flex">
        
        <div className="draggable-items w-1/3 p-4">
          <DraggableItem type="text" label="Text" />
          <DraggableItem type="image" label="Image" />
          <DraggableItem type="button" label="Button" />
        </div>

   
        <div className="drop-zone w-2/3 p-4 border-2 border-dashed">
          <DropZone onDrop={handleElementDrop} />
        </div>
      </div>

 
      <ElementForm />
    </div>
  );
};

export default WebsiteBuilder;
