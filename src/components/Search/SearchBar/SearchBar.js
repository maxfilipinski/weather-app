import './SearchBar.css';
import config from '../../../config.json';
import { useContext, useState } from 'react';
import ForecastContext from '../../../store/forecast-context';

const SearchBar = (props) => {
  const forecastCtx = useContext(ForecastContext);
  const [query, setQuery] = useState('');

  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      if (query.trim().length === 0) {
        return;
      }

      fetch(
        `${config.API_URL}?q=${query}&units=${props.unit}&appid=${config.API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          forecastCtx.setForecast(res);
          setQuery('');
        });
    }
  };

  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search..."
      value={query}
      onKeyDown={onKeyDownHandler}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBar;
