import { Typography } from '@mui/material';
import { useContext } from 'react';
import { ForecastContext } from 'src/renderer/context/forecastContext';
import { LocationCity } from '@mui/icons-material';

export const Location = () => {
  const forecastCtx = useContext(ForecastContext);

  const location =
    forecastCtx.currentWeatherData.name &&
    forecastCtx.currentWeatherData.sys?.country
      ? `${forecastCtx.currentWeatherData.name}, ${forecastCtx.currentWeatherData.sys?.country}`
      : '';

  return (
    <Typography
      variant="h6"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      <LocationCity />
      {location}
    </Typography>
  );
};
