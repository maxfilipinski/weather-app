import { useContext } from 'react';
import { ForecastContext } from 'src/renderer/context/forecastContext';

export const Location = () => {
  const forecastCtx = useContext(ForecastContext);

  const location =
    forecastCtx.forecast.name && forecastCtx.forecast.sys?.country
      ? `${forecastCtx.forecast.name}, ${forecastCtx.forecast.sys?.country}`
      : '';

  return (
    <div className="location">{location !== '' && <div>{location}</div>}</div>
  );
};
