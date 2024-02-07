import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useContext } from 'react';
import {
  ForecastContext,
  TempUnitSymbol,
} from 'src/renderer/context/forecastContext';
import NorthIcon from '@mui/icons-material/North';

export const CurrentWeather = () => {
  const forecastCtx = useContext(ForecastContext);
  const weather = forecastCtx.currentWeatherData.weather[0];
  const temperature = Math.round(forecastCtx.currentWeatherData.main.temp);
  const tempFeelsLike = Math.round(
    forecastCtx.currentWeatherData.main.feels_like,
  );
  const tempMax = Math.round(forecastCtx.currentWeatherData.main.temp_max);
  const tempMin = Math.round(forecastCtx.currentWeatherData.main.temp_min);
  const tempUnit = TempUnitSymbol[forecastCtx.tempUnit];
  const cloudiness = forecastCtx.currentWeatherData.clouds.all;
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
        sx={{ paddingBottom: '0px' }}
      />
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          />
          <Typography variant="h2">{temperature}</Typography>
          <Typography variant="h4">{tempUnit}</Typography>
          <Typography variant="h3" sx={{ marginLeft: '32px' }}>
            {weather.main}
          </Typography>
        </div>
        <table style={{ width: '100%', textAlign: 'center' }}>
          <tr>
            <th>
              <Typography fontSize="0.9em" color="text.secondary">
                Feels like
              </Typography>
            </th>
            <th>
              <Typography fontSize="0.9em" color="text.secondary">
                Temp. max
              </Typography>
            </th>
            <th>
              <Typography fontSize="0.9em" color="text.secondary">
                Temp. min
              </Typography>
            </th>
            <th>
              <Typography fontSize="0.9em" color="text.secondary">
                Cloudiness
              </Typography>
            </th>
          </tr>
          <tr>
            <td>
              <Box sx={{ fontWeight: 'bold' }}>
                {tempFeelsLike}
                {tempUnit}
              </Box>
            </td>
            <td>
              <Box sx={{ fontWeight: 'bold' }}>
                {tempMax}
                {tempUnit}
              </Box>
            </td>
            <td>
              <Box sx={{ fontWeight: 'bold' }}>
                {tempMin}
                {tempUnit}
              </Box>
            </td>
            <td>
              <Box sx={{ fontWeight: 'bold' }}>{cloudiness}%</Box>
            </td>
          </tr>
          <tr>
            <th>
              <Typography fontSize="0.9em" color="text.secondary">
                Wind
              </Typography>
            </th>
            <th>
              <Typography fontSize="0.9em" color="text.secondary">
                Pressure
              </Typography>
            </th>
            <th>
              <Typography fontSize="0.9em" color="text.secondary">
                Humidity
              </Typography>
            </th>
            <th>
              <Typography fontSize="0.9em" color="text.secondary">
                Visibility
              </Typography>
            </th>
          </tr>
          <tr>
            <td>
              <Box
                sx={{
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '2px',
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
            </td>
            <td>
              <Box sx={{ fontWeight: 'bold' }}>{main.pressure} hPa</Box>
            </td>
            <td>
              <Box sx={{ fontWeight: 'bold' }}>{main.humidity}%</Box>
            </td>
            <td>
              <Box sx={{ fontWeight: 'bold' }}>{visibility} km</Box>
            </td>
          </tr>
        </table>
      </CardContent>
    </Card>
  );
};
