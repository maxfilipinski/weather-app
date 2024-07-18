import './Search.scss';
import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import { AppContext } from 'src/renderer/context/appContext';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as config from 'src/renderer/config';

export const Search = () => {
  const appCtx = useContext(AppContext);
  const forecastCtx = useContext(WeatherContext);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchData = async (location = { lat: 0, lon: 0 }) => {
    appCtx.setIsLoading(true);

    try {
      const url =
        location.lat && location.lon
          ? `${config.API_URL}?lat=${location.lat}&lon=${location.lon}&units=${forecastCtx.tempUnit}&appid=${config.API_KEY}`
          : `${config.API_URL}?q=${searchQuery}&units=${forecastCtx.tempUnit}&appid=${config.API_KEY}`;

      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          if (res.cod !== '404') {
            appCtx.setIsLoading(false);
            forecastCtx.setWeather(res);
          }

          setSearchQuery('');
        });
    } catch (error) {
      console.error('Error fetching data:', error);
      appCtx.setIsLoading(false);
    }
  };

  const onKeyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && searchQuery.trim().length !== 0) {
      fetchData();
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search">
      <div className="search__icon">
        <SearchIcon />
      </div>
      <InputBase
        className="search__input"
        placeholder="Search..."
        value={searchQuery}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
      />
    </div>
  );
};
