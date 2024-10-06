// src/components/DropZone.js
import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'element',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`h-64 border-2 border-dashed p-4 ${isOver ? 'bg-gray-200' : 'bg-white'}`}
    >
      Drop elements here
    </div>
  );
};

export default DropZone;
