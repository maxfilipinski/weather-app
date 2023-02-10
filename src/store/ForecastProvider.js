import { useState } from 'react';
import ForecastContext from './forecast-context';

const defaultForecastState = {
  data: {
    clouds: {},
    main: {},
    name: '',
    rain: {},
    visibility: -1,
    weather: [{ main: '' }],
    wind: {},
    sys: {},
  },
};

const ForecastProvider = (props) => {
  const [forecastState, setForecastState] = useState(defaultForecastState);

  const setForecastHandler = (data) => {
    setForecastState({
      data: {
        clouds: data.clouds,
        main: data.main,
        name: data.name,
        rain: data.rain,
        visibility: data.visibility,
        weather: data.weather,
        wind: data.wind,
        sys: data.sys,
      },
    });
  };

  const forecastContext = {
    data: forecastState.data,
    setForecast: setForecastHandler,
  };

  return (
    <ForecastContext.Provider value={forecastContext}>
      {props.children}
    </ForecastContext.Provider>
  );
};

export default ForecastProvider;
