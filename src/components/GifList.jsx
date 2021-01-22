import React from "react";
import GifDisplay from "./GifDisplay";

const GifList = ({ gifs, select }) => {
  const renderList = () => {
    return gifs.map(({ id }) => {
      return <GifDisplay id={id} key={id} select={select} />;
    });
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};

export default GifList;
