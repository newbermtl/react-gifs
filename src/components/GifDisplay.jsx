import React from 'react';

const GifDisplay = ({ id, select }) => {
  if (id === null) { return null; }

  // shouldComponentUpdate(nextProps, nextState) return nextProps.id !== id;
  // Look into lifecycle methods in functional components since Class components are out

  const handleClick = () => {
    select(id);
  };

  const src = `https://media.giphy.com/media/${id}/giphy.gif`;

  return (
    <img className="gif" src={src} alt="gif" onClick={handleClick} />
  );
};

export default GifDisplay;
