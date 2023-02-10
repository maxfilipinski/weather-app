import './SearchBar.css';
import config from '../../../config.json';
import { useContext, useEffect, useState } from 'react';
import ForecastContext from '../../../store/forecast-context';

const SearchBar = (props) => {
  const forecastCtx = useContext(ForecastContext);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const success = (location) => {
      fetchData({
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      });
    };

    const error = () => {
      alert('Cannot fetch current location');
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const fetchData = (location = {}) => {
    const url =
      location.lat && location.lon
        ? `${config.API_URL}?lat=${location.lat}&lon=${location.lon}&units=${props.unit}&appid=${config.API_KEY}`
        : `${config.API_URL}?q=${query}&units=${props.unit}&appid=${config.API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        forecastCtx.setForecast(res);
        console.log(forecastCtx.data);
        setQuery('');
      });
  };

  const onKeyDownHandler = (event) => {
    if (event.key === 'Enter' && query.trim().length !== 0) {
      fetchData();
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
