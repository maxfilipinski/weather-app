import './App.css';
import React, { useState } from 'react';
import Search from './components/Search/Search';
import Location from './components/Location/Location';
import Weather from './components/Weather/Weather';
import ForecastProvider from './store/ForecastProvider';

function App() {
  const [weatherClassName, setWeatherClassName] = useState('');

  const weatherChangeHandler = (weather) => {
    switch (weather) {
      case 'Clear':
        setWeatherClassName('sunny');
        break;
      case 'Clouds':
        setWeatherClassName('cloudy');
        break;
      case 'Rain':
        setWeatherClassName('rainy');
        break;
      case 'Snow':
        setWeatherClassName('snowy');
        break;
      case 'Mist':
        setWeatherClassName('foggy');
        break;
      default:
        setWeatherClassName('');
        break;
    }
  };

  return (
    <ForecastProvider>
      <div className={`app ${weatherClassName}`}>
        <Search />
        <Location />
        <Weather onWeatherChange={weatherChangeHandler} />
      </div>
    </ForecastProvider>
  );
}

export default App;
