import { createContext, useState } from 'react';
import {
  CurrentWeatherDataType,
  ContextProviderProps,
  TempUnitType,
  WeatherContextType,
  GeolocationPositionType,
} from '../data/types';

export const TempUnitSymbol: { [unit: string]: string } = {
  metric: '°C',
  imperial: '°F',
  standard: '°K',
};

const initialWeather: CurrentWeatherDataType = {
  clouds: { all: 0 },
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0,
  },
  name: '',
  rain: {
    '1h': 0,
    '3h': 0,
  },
  snow: {
    '1h': 0,
    '3h': 0,
  },
  visibility: 0,
  weather: [
    {
      main: '',
      description: '',
      icon: '',
    },
  ],
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  sys: {
    country: '',
    sunrise: 0,
    sunset: 0,
  },
};

const initialLocation: GeolocationPositionType = {
  coords: {
    accuracy: 0,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 0,
    longitude: 0,
    speed: null,
  },
  timestamp: 0,
};

export const WeatherContext = createContext<WeatherContextType>({
  currentWeatherData: initialWeather,
  tempUnit: 'metric',
  location: initialLocation,
  setWeather: (data: CurrentWeatherDataType) => {},
  setTempUnit: (data: TempUnitType) => {},
  setLocation: (data: GeolocationPositionType) => {},
});

export function WeatherContextProvider({ children }: ContextProviderProps) {
  const [location, setLocation] =
    useState<GeolocationPositionType>(initialLocation);
  const [weather, setWeather] =
    useState<CurrentWeatherDataType>(initialWeather);
  const [tempUnit, setTempUnit] = useState<TempUnitType>('metric');

  return (
    <WeatherContext.Provider
      value={{
        currentWeatherData: weather,
        tempUnit,
        location,
        setWeather,
        setTempUnit,
        setLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
