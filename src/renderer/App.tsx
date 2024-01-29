import './App.css';
import { useContext, useState } from 'react';
import { AppContext } from './context/appContext';
import { Location } from 'src/renderer/components/location/location';
import { Weather } from 'src/renderer/components/weather/weather';
import Search from 'src/renderer/components/search/search';
import { ForecastContextProvider } from 'src/renderer/context/forecastContext';
import Units from './components/units/units';

function App() {
  const [weatherClassName, setWeatherClassName] = useState('');
  const appCtx = useContext(AppContext);
  const isLoading = appCtx.isLoading;

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
    <ForecastContextProvider>
      <div className={`app ${weatherClassName}`}>
        <div className="header">
          <Search />
          <Units />
        </div>
        <div className="main">
          {!isLoading ? (
            <>
              <Location />
              <Weather onWeatherChange={weatherChangeHandler} />
            </>
          ) : (
            <span>loading...</span>
          )}
        </div>
      </div>
    </ForecastContextProvider>
  );
}

export default App;
