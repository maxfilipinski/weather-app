import './App.css';
import { useContext } from 'react';
import AppContextProvider, { AppContext } from './context/appContext';
import { Location } from 'src/renderer/components/Location/Location';
import { CurrentWeather } from 'src/renderer/components/Weather/CurrentWeather/CurrentWeather';
import { WeatherContextProvider } from 'src/renderer/context/weatherContext';
import { DaylightInfo } from 'src/renderer/components/Weather/DaylightInfo/DaylightInfo';
import Menu from 'src/renderer/components/Menu/Menu';

function App() {
  const appCtx = useContext(AppContext);
  const isLoading = appCtx.isLoading;

  return (
    <AppContextProvider>
      <WeatherContextProvider>
        <Menu />
        {!isLoading ? (
          <>
            <Location />
            <div className="app__weather-content">
              <CurrentWeather />
              <DaylightInfo />
            </div>
          </>
        ) : (
          <span>loading...</span>
        )}
      </WeatherContextProvider>
    </AppContextProvider>
  );
}

export default App;
