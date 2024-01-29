import { useContext, useEffect } from 'react';
import { ForecastContext } from 'src/renderer/context/forecastContext';

type WeatherProps = {
  onWeatherChange: (data: string) => void;
};

export const Weather = (props: WeatherProps) => {
  const forecastCtx = useContext(ForecastContext);
  const temperature = forecastCtx.forecast.main.temp;
  const weather = forecastCtx.forecast.weather[0]?.main;

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
