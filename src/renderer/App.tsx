import './App.css';
import { useContext, useEffect } from 'react';
import AppContextProvider, { AppContext } from './context/appContext';
import { Location } from 'src/renderer/components/location/location';
import { CurrentWeather } from 'src/renderer/components/weather/currentWeather';
import {
  WeatherContext,
  WeatherContextProvider,
} from 'src/renderer/context/weatherContext';
import { DaylightInfo } from './components/weather/daylightInfo';
import Menu from 'src/renderer/components/menu/menu';
import { GeolocationPositionType } from './data/types';

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
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
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
