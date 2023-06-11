import React from 'react';

function CourcesItem({ id, title, instructor, duration, image }) {
  return (
    <div className="courcesItem">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
    </div>
  );
}

export default CourcesItem;
