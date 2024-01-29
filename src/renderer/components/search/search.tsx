import { useContext, useEffect, useState } from 'react';
import { AppContext } from 'src/renderer/context/appContext';
import { ForecastContext } from 'src/renderer/context/forecastContext';
import * as config from 'src/renderer/config';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

const Search = () => {
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
        ? `${config.API_URL}?lat=${location.lat}&lon=${location.lon}&units=${forecastCtx.tempUnit}&appid=${config.API_KEY}`
        : `${config.API_URL}?q=${query}&units=${forecastCtx.tempUnit}&appid=${config.API_KEY}`;

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
    <TextField
      id="search"
      variant="outlined"
      placeholder="Search city"
      value={query}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <LocationSearchingIcon />
          </InputAdornment>
        ),
      }}
      onKeyDown={onKeyDownHandler}
      onChange={onChangeHandler}
    />
  );
};

export default Search;
