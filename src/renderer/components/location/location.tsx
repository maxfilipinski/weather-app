import { Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import { LocationCity } from '@mui/icons-material';
import weatherService from 'src/renderer/services/weatherService';

export const Location = () => {
  const weatherCtx = useContext(WeatherContext);
  const location: string =
    weatherCtx.currentWeatherData.name &&
    weatherCtx.currentWeatherData.sys?.country
      ? `${weatherCtx.currentWeatherData.name}, ${weatherCtx.currentWeatherData.sys?.country}`
      : '';

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        weatherCtx.setLocation(position);

        weatherService
          .fetchWeather(position, weatherCtx.tempUnit)
          .then((weather) => {
            weatherCtx.setWeather(weather);
          });
      },
      (error) => {
        alert('Cannot fetch current location');
      },
    );
  }, []);

  return (
    <Typography
      variant="h6"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.75rem',
        height: '48px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
      }}
    >
      <LocationCity />
      {location}
    </Typography>
  );
};
