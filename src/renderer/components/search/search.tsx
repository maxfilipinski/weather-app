import { ChangeEvent, KeyboardEvent, useContext, useState } from 'react';
import { AppContext } from 'src/renderer/context/appContext';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import * as config from 'src/renderer/config';
import { styled, alpha, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  const appCtx = useContext(AppContext);
  const forecastCtx = useContext(WeatherContext);
  const [query, setQuery] = useState('');

  const SearchBase = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    minHeight: '40px',
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

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
        forecastCtx.setWeather(res);
        setQuery('');
      });
  };

  const onKeyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && query.trim().length !== 0) {
      fetchData();
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <SearchBase>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={query}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
      />
    </SearchBase>
  );
}
