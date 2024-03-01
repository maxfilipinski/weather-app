import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useContext } from 'react';
import {
  WeatherContext,
  TempUnitSymbol,
} from 'src/renderer/context/weatherContext';
import NorthIcon from '@mui/icons-material/North';

export const CurrentWeather = () => {
  const forecastCtx = useContext(WeatherContext);
  const weather = forecastCtx.currentWeatherData.weather[0];
  const temperature = Math.round(forecastCtx.currentWeatherData.main.temp);
  const tempFeelsLike = Math.round(
    forecastCtx.currentWeatherData.main.feels_like,
  );
  const tempMax = Math.round(forecastCtx.currentWeatherData.main.temp_max);
  const tempMin = Math.round(forecastCtx.currentWeatherData.main.temp_min);
  const tempUnit = TempUnitSymbol[forecastCtx.tempUnit];
  const windSpeed =
    forecastCtx.tempUnit === 'imperial'
      ? `${forecastCtx.currentWeatherData.wind.speed} mph`
      : `${Math.round(forecastCtx.currentWeatherData.wind.speed * 3.6)} kph`;
  const main = forecastCtx.currentWeatherData.main;
  const visibility = forecastCtx.currentWeatherData.visibility / 1000;

  console.log(forecastCtx.currentWeatherData);

  return (
    <Card>
      <CardHeader
        title={<Typography>Current weather</Typography>}
        sx={{ paddingBottom: 0 }}
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
                  transform: `rotate(${180 + forecastCtx.currentWeatherData.wind.deg}deg)`,
                }}
              />
            </Box>
          </Box>
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Pressure
            </Typography>
            <Box sx={{ fontWeight: 'bold' }}>{main.pressure} hPa</Box>
          </Box>
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Humidity
            </Typography>
            <Box sx={{ fontWeight: 'bold' }}>{main.humidity}%</Box>
          </Box>
          <Box>
            <Typography fontSize="0.8em" color="text.secondary">
              Visibility
            </Typography>
            <Box sx={{ fontWeight: 'bold' }}>{visibility} km</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
