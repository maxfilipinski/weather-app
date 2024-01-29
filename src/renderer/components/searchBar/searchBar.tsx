import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'src/renderer/context/appContext';
import { ForecastContext } from 'src/renderer/context/forecastContext';
import * as config from 'src/renderer/config';

const SearchBar = (props) => {
  const appCtx = useContext(AppContext);
  const forecastCtx = useContext(ForecastContext);
  const [query, setQuery] = useState('');

  //   useEffect(() => {
  //     const success = (location) => {
  //       fetchData({
  //         lat: location.coords.latitude,
  //         lon: location.coords.longitude,
  //       });
  //     };

  //     const error = () => {
  //       alert('Cannot fetch current location');
  //     };

  //     navigator.geolocation.getCurrentPosition(success, error);
  //   }, []);

  const fetchData = (location = { lat: 0, lon: 0 }) => {
    appCtx.setIsLoading(true);
    const url =
      location.lat && location.lon
        ? `${config.API_URL}?lat=${location.lat}&lon=${location.lon}&units=${props.unit}&appid=${config.API_KEY}`
        : `${config.API_URL}?q=${query}&units=${props.unit}&appid=${config.API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        appCtx.setIsLoading(false);
        forecastCtx.setForecast(res);
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
