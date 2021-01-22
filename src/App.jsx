import React, { useState } from "react";
import giphy from 'giphy-api';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GifDisplay from './components/GifDisplay';

const giphyApiKey = "M6zXElEBD9rFbMBCDhtKmqflHhdQnjY5";


const App = () => {
  const [ gifs, setGifs ] = useState([]);
  const [ selectedGif, setSelectedGif ] = useState("l41lR9cLxFqcJI4co");

  const search = (query) => {
    giphy(`${giphyApiKey}`).search({
      q: query,
      limit: 10
    }, (error, result) => {
      setGifs(result.data);
    });
  };

  const select = (gif) => {
    setSelectedGif(gif);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar search={search} />
        <div className="selected-gif">
          <GifDisplay id={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} select={select} />
      </div>
    </div>
  );
};

export default App;
