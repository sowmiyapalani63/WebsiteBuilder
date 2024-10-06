import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setWebsiteDetails } from '../redux/websiteSlice'; 

const initialSections = [
  { id: 'section-1', content: 'Header Section' },
  { id: 'section-2', content: 'About Section' },
  { id: 'section-3', content: 'Services Section' },
  { id: 'section-4', content: 'Contact Section' },
];

const SectionCustomizer = ({ formData }) => {
  const [sections, setSections] = useState(initialSections);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedSections = Array.from(sections);
    const [movedSection] = reorderedSections.splice(result.source.index, 1);
    reorderedSections.splice(result.destination.index, 0, movedSection);

    setSections(reorderedSections); 
  };

  const handleFinalize = (e) => {
    e.preventDefault();
    
    const updatedFormData = {
      ...formData, 
      elements: sections, 
    };
  
    dispatch(setWebsiteDetails(updatedFormData));
    navigate('/finalize');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Customize Your Website Sections</h2>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-blue-100 p-4 mb-2 rounded-lg shadow-md"
                    >
                      {section.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button onClick={handleFinalize} className="btn mt-4">
        Finalize and Create Website
      </button>
    </div>
  );
};

export default SectionCustomizer;
