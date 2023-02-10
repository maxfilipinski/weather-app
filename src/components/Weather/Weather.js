import './Weather.css';
import { useContext, useEffect } from 'react';
import ForecastContext from '../../store/forecast-context';

const Weather = (props) => {
  const forecastCtx = useContext(ForecastContext);
  const temperature = forecastCtx.data.main.temp;
  const weather = forecastCtx.data.weather[0]?.main;

  useEffect(() => {
    props.onWeatherChange(weather);
  }, [weather]);

  return (
    <div className="weather">
      {temperature && <div className="temp">{Math.round(temperature)}</div>}
      {weather && <div className="info">{weather}</div>}
    </div>
  );
};

export default Weather;
