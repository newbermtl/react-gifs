import React from 'react';

const GifDisplay = (props) => {
  const { id } = props;
  const src = `https://media.giphy.com/media/${id}/giphy.gif`;
  return (
    <img className="gif" src={src} alt="gif" />
  );
};

export default GifDisplay;
