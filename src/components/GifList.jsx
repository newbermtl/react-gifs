import React from "react";
import GifDisplay from "./GifDisplay";

const GifList = (props) => {
  const renderList = () => {
    return props.gifs.map((gif) => {
      return <GifDisplay id={gif.id} key={gif.id} select={props.select} />;
    });
  };

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
};

export default GifList;
