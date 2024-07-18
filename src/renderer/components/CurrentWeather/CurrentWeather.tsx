import './CurrentWeather.scss';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useContext, useMemo } from 'react';
import {
  WeatherContext,
  TempUnitSymbol,
} from 'src/renderer/context/weatherContext';
import NorthIcon from '@mui/icons-material/North';
import formatTime from 'src/renderer/utils/formatTime';
import 'src/renderer/App.scss';

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

  const location: string = useMemo(() => {
    return weatherCtx.currentWeatherData.name &&
      weatherCtx.currentWeatherData.sys?.country
      ? `${weatherCtx.currentWeatherData.name}, ${weatherCtx.currentWeatherData.sys?.country}`
      : '';
  }, [weatherCtx.currentWeatherData]);

  return (
    <div className="current-weather">
      <div className="current-weather__location">{location}</div>
      <div className="current-weather__main-info">
        <div className="main-info__icon">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            style={{ margin: '-10px' }}
          />
        </div>
        <div className="main-info__temperature">
          {temperature}
          {tempUnit}
        </div>
      </div>
      <div className="current-weather__description">{weather.main}</div>
      <div className="current-weather__temperatures">
        <span>
          High: {tempMax}
          {tempUnit}
        </span>
        <span>
          Low: {tempMin}
          {tempUnit}
        </span>
      </div>
    </div>
  );
};
