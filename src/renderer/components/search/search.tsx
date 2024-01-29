import SearchBar from '../searchBar/searchBar';
import Units from '../units/units';
import React, { useState } from 'react';

export const Search = () => {
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
