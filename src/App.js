import './App.css';
import React, { useContext, useState } from 'react';
import Search from './components/Search/Search';
import Location from './components/Location/Location';
import Weather from './components/Weather/Weather';
import ForecastProvider from './store/ForecastProvider';
import AppContext from './store/app-context';
import Spinner from './components/UI/Spinner';

function App() {
  const [weatherClassName, setWeatherClassName] = useState('');
  const appCtx = useContext(AppContext);
  let isLoading = appCtx.isLoading;

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
        {!isLoading ? (
          <>
            <Location />
            <Weather onWeatherChange={weatherChangeHandler} />
          </>
        ) : (
          <Spinner loading={isLoading} />
        )}
      </div>
    </ForecastProvider>
  );
}

export default App;
