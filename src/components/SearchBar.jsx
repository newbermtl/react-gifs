import React, { useState } from 'react';

const SearchBar = ({ search }) => {
  const [ term, setTerm ] = useState("");
  const handleChange = (event) => {
    setTerm(event.target.value);
    search(event.target.value);
  };

  return (
    <input className="form-search form-control" type="text" value={term} onChange={handleChange} />
  );
};

export default SearchBar;
