import './App.scss';
import { useContext } from 'react';
import AppContextProvider, { AppContext } from './context/appContext';
import { Location } from 'src/renderer/components/Location/Location';
import { CurrentWeather } from 'src/renderer/components/CurrentWeather/CurrentWeather';
import { WeatherContextProvider } from 'src/renderer/context/weatherContext';
import { DaylightInfo } from 'src/renderer/components/DaylightInfo/DaylightInfo';
import { Menu } from 'src/renderer/components/Menu/Menu';

function App() {
  const appCtx = useContext(AppContext);
  const isLoading = appCtx.isLoading;

  return (
    <AppContextProvider>
      <WeatherContextProvider>
        <div className="app">
          <div className="app__head">
            <Menu />
          </div>
          <div className="app__body">
            {!isLoading ? (
              <>
                <CurrentWeather />
                <DaylightInfo />
              </>
            ) : (
              <span>loading...</span>
            )}
          </div>
        </div>
      </WeatherContextProvider>
    </AppContextProvider>
  );
}

export default App;
