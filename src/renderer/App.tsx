import './App.css';
import { useContext } from 'react';
import { AppContext } from './context/appContext';
import { Location } from 'src/renderer/components/location/location';
import { CurrentWeather } from 'src/renderer/components/weather/currentWeather';
import Search from 'src/renderer/components/search/search';
import { ForecastContextProvider } from 'src/renderer/context/forecastContext';
import Units from './components/units/units';

function App() {
  const appCtx = useContext(AppContext);
  const isLoading = appCtx.isLoading;

  return (
    <ForecastContextProvider>
      <div className="header">
        <Search />
        <Units />
      </div>
      <div className="main">
        {!isLoading ? (
          <>
            <Location />
            <CurrentWeather />
          </>
        ) : (
          <span>loading...</span>
        )}
      </div>
    </ForecastContextProvider>
  );
}

export default App;
