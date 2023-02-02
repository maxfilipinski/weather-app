import './App.css';
import Search from './components/Search/Search';
import Location from './components/Location/Location';
import Weather from './components/Weather/Weather';
import ForecastProvider from './store/ForecastProvider';

function App() {
  return (
    <ForecastProvider>
      <div className="app-window">
        <Search />
        <Location />
        <Weather />
      </div>
    </ForecastProvider>
  );
}

export default App;
