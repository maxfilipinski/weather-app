import './Search.css';
import React, { useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import Units from './Units/Units';

const Search = () => {
  const [unit, setUnit] = useState('metric');

  const unitChangeHandler = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="search">
      <SearchBar unit={unit} />
      <Units onUnitChange={unitChangeHandler} />
    </div>
  );
};

export default Search;
