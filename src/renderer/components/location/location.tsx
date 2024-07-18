import './Location.scss';
import { Typography } from '@mui/material';
import { useContext, useMemo } from 'react';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import { LocationCity } from '@mui/icons-material';

export const Location = () => {
  const weatherCtx = useContext(WeatherContext);
  const { currentWeatherData } = weatherCtx || {};
  const location: string = useMemo(() => {
    return currentWeatherData.name && currentWeatherData.sys?.country
      ? `${weatherCtx.currentWeatherData.name}, ${weatherCtx.currentWeatherData.sys?.country}`
      : '';
  }, [currentWeatherData]);

  return (
    location && (
      <Typography className="location" variant="h6">
        <LocationCity />
        {location}
      </Typography>
    )
  );
};
