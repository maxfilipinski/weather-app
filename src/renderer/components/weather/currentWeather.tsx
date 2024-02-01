import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useContext } from 'react';
import {
  ForecastContext,
  TempUnitSymbol,
} from 'src/renderer/context/forecastContext';

export const CurrentWeather = () => {
  const forecastCtx = useContext(ForecastContext);
  const weather = forecastCtx.forecast.weather[0];
  const temperature = forecastCtx.forecast.main.temp;
  const tempFeelsLike = forecastCtx.forecast.main.feelsLike;

  console.log(forecastCtx.forecast);

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
          <Typography variant="h2">{Math.round(temperature)}</Typography>
          <Typography variant="h4">
            {TempUnitSymbol[forecastCtx.tempUnit]}
          </Typography>
          <Typography variant="h3" sx={{ marginLeft: '32px' }}>
            {weather.description}
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography fontSize="8" color="text.secondary">
            Wind
          </Typography>
          <Typography fontSize="8" color="text.secondary">
            Humidity
          </Typography>
          <Typography fontSize="8" color="text.secondary">
            Visibility
          </Typography>
          <Typography fontSize="8" color="text.secondary">
            Pressure
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
