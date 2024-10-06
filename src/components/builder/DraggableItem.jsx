// src/components/DraggableItem.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 m-2 border rounded cursor-move ${isDragging ? 'opacity-50' : ''}`}
    >
      {label}
    </div>
  );
};

export default DraggableItem;
