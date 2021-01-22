import React from 'react';

const GifDisplay = (props) => {
  const handleClick = (event) => {
    // props.select(event.target.src);
    props.select(props.id);
  };
  const src = `https://media.giphy.com/media/${props.id}/giphy.gif`;
  return (
    <img className="gif" src={src} alt="gif" onClick={handleClick} />
  );
};

export default GifDisplay;
