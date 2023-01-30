import './SearchBar.css';
import config from '../../../config.json';
import { useState } from 'react';

const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      fetch(
        `${config.API_URL}?q=${query}&units=${props.unit}&appid=${config.API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          setQuery('');
          console.log(res);
        });
    }
  };

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onKeyDown={onKeyDownHandler}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBar;
