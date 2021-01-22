import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.search(event.target.value);
  };

  return (
    <input className="form-search form-control" type="text" onChange={handleChange} />
  );
};

export default SearchBar;
