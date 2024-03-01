import { ReactNode } from 'react';

export type ContextProviderProps = {
  children: ReactNode;
};

export type CurrentWeatherDataType = {
  clouds: { all: number };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  name: string;
  rain: {
    '1h': number;
    '3h': number;
  };
  snow: {
    '1h': number;
    '3h': number;
  };
  visibility: number;
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
};

export type TempUnitType = 'metric' | 'imperial' | 'standard';

export type LocationType = {
  name: string;
  country: string;
};

export type GeolocationPositionType = {
  coords: {
    accuracy: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    latitude: number;
    longitude: number;
    speed: number | null;
  };
  timestamp: number;
};

export type WeatherContextType = {
  currentWeatherData: CurrentWeatherDataType;
  tempUnit: TempUnitType;
  location: GeolocationPositionType;
  setWeather: (data: CurrentWeatherDataType) => void;
  setTempUnit: (data: TempUnitType) => void;
  setLocation: (data: GeolocationPositionType) => void;
};
