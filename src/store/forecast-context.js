import React from 'react';

const ForecastContext = React.createContext({
  data: {
    clouds: {},
    main: {},
    name: '',
    rain: {},
    visibility: 0,
    weather: [{ main: '' }],
    wind: {},
    sys: {},
  },
  setForecast: (data) => {},
});

export default ForecastContext;
