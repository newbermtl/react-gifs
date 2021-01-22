import React from "react";
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GifDisplay from './components/GifDisplay';

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <GifDisplay id="l41lR9cLxFqcJI4co" />
        </div>
      </div>
      <div className="right-scene">
        <GifList name="Bambino" />
      </div>
    </div>
  );
};

export default App;
