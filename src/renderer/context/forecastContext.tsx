import { createContext, useState } from 'react';
import { ContextProviderProps } from '../data/types';

type CurrentWeatherDataType = {
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
export const TempUnitSymbol: { [unit: string]: string } = {
  metric: '°C',
  imperial: '°F',
  standard: '°K',
};

type ForecastContextType = {
  currentWeatherData: CurrentWeatherDataType;
  tempUnit: TempUnitType;
  setForecast: (data: CurrentWeatherDataType) => void;
  setTempUnit: (data: TempUnitType) => void;
};

const defaultForecast = {
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

export const ForecastContext = createContext<ForecastContextType>({
  currentWeatherData: defaultForecast,
  tempUnit: 'metric',
  setForecast: (data: CurrentWeatherDataType) => {},
  setTempUnit: (data: TempUnitType) => {},
});

export function ForecastContextProvider({ children }: ContextProviderProps) {
  const [forecast, setForecast] =
    useState<CurrentWeatherDataType>(defaultForecast);
  const [tempUnit, setTempUnit] = useState<TempUnitType>('metric');

  return (
    <ForecastContext.Provider
      value={{
        currentWeatherData: forecast,
        tempUnit,
        setForecast,
        setTempUnit,
      }}
    >
      {children}
    </ForecastContext.Provider>
  );
}
