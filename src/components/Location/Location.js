import './Location.css';
import React, { useContext } from 'react';
import ForecastContext from '../../store/forecast-context';

const Location = () => {
  const forecastCtx = useContext(ForecastContext);

  const location =
    forecastCtx.data.name && forecastCtx.data.sys?.country
      ? `${forecastCtx.data.name}, ${forecastCtx.data.sys?.country}`
      : '';

  return (
    <div className="location">{location !== '' && <div>{location}</div>}</div>
  );
};

export default Location;
