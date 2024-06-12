import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useContext } from 'react';
import {
  WeatherContext,
  TempUnitSymbol,
} from 'src/renderer/context/weatherContext';
import NorthIcon from '@mui/icons-material/North';
import formatTime from 'src/renderer/utils/formatTime';
import styles from './currentWeather.module.scss';
import 'src/renderer/App.css';

export const CurrentWeather = () => {
  const weatherCtx = useContext(WeatherContext);
  const weather = weatherCtx.currentWeatherData.weather[0];
  const temperature = Math.round(weatherCtx.currentWeatherData.main.temp);
  const tempFeelsLike = Math.round(
    weatherCtx.currentWeatherData.main.feels_like,
  );
  const tempMax = Math.round(weatherCtx.currentWeatherData.main.temp_max);
  const tempMin = Math.round(weatherCtx.currentWeatherData.main.temp_min);
  const tempUnit = TempUnitSymbol[weatherCtx.tempUnit];
  const windSpeed =
    weatherCtx.tempUnit === 'imperial'
      ? `${weatherCtx.currentWeatherData.wind.speed} mph`
      : `${Math.round(weatherCtx.currentWeatherData.wind.speed * 3.6)} km/h`;
  const main = weatherCtx.currentWeatherData.main;
  const visibility = weatherCtx.currentWeatherData.visibility / 1000;

  return (
    <Card className={styles.card}>
      <CardHeader
        className={styles.card__header}
        title={<Typography>Current weather</Typography>}
        subheader={
          <Typography fontSize="0.9em" color="text.secondary">
            {formatTime(new Date(weatherCtx.currentWeatherData.lastUpdate))}
          </Typography>
        }
      />
      <CardContent sx={{ padding: '16px !important' }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
        >
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            style={{ margin: '-10px' }}
          />
          <Typography variant="h3">{temperature}</Typography>
          <Typography variant="h5" sx={{ marginBottom: '1rem' }}>
            {tempUnit}
          </Typography>
          <Box sx={{ display: 'block', marginLeft: '2rem' }}>
            <Typography variant="h6">{weather.main}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
              <Typography fontSize="0.9em" color="text.secondary">
                Feels like
              </Typography>
              <Typography fontSize="0.9em" sx={{ fontWeight: 'bold' }}>
                {tempFeelsLike}
                {tempUnit}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Temp. max
            </Typography>
            <Box sx={{ fontWeight: 'bold' }}>
              {tempMax}
              {tempUnit}
            </Box>
          </Box>
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Temp. min
            </Typography>
            <Box sx={{ fontWeight: 'bold' }}>
              {tempMin}
              {tempUnit}
            </Box>
          </Box>
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Wind
            </Typography>
            <Box
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.1rem',
              }}
            >
              {windSpeed}
              <NorthIcon
                fontSize="inherit"
                sx={{
                  transform: `rotate(${180 + weatherCtx.currentWeatherData.wind.deg}deg)`,
                }}
              />
            </Box>
          </Box>
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Pressure
            </Typography>
            <Box className="app__text--bold">{main.pressure} hPa</Box>
          </Box>
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Humidity
            </Typography>
            <Box className="app__text--bold">{main.humidity}%</Box>
          </Box>
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Visibility
            </Typography>
            <Box className="app__text--bold">{visibility} km</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
