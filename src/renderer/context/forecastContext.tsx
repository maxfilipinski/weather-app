import { createContext, useState } from 'react';
import { ContextProviderProps } from '../data/types';

type ForecastType = {
  clouds: { all: number };
  main: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
    seaLevel: number;
    grndLevel: number;
  };
  name: string;
  rain: {
    oneH: number;
    threeH: number;
  };
  visibility: number;
  weather: {
    main: string;
    description: string;
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

export type TempUnitType = 'metric' | 'imperial' | '';

type ForecastContextType = {
  forecast: ForecastType;
  tempUnit: TempUnitType;
  setForecast: (data: ForecastType) => void;
  setTempUnit: (data: TempUnitType) => void;
};

const defaultForecast = {
  clouds: { all: 0 },
  main: {
    temp: 0,
    feelsLike: 0,
    tempMin: 0,
    tempMax: 0,
    pressure: 0,
    humidity: 0,
    seaLevel: 0,
    grndLevel: 0,
  },
  name: '',
  rain: {
    oneH: 0,
    threeH: 0,
  },
  visibility: 0,
  weather: [
    {
      main: '',
      description: '',
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
  forecast: defaultForecast,
  tempUnit: 'metric',
  setForecast: (data: ForecastType) => {},
  setTempUnit: (data: TempUnitType) => {},
});

export function ForecastContextProvider({ children }: ContextProviderProps) {
  const [forecast, setForecast] = useState<ForecastType>(defaultForecast);
  const [tempUnit, setTempUnit] = useState<TempUnitType>('metric');

  return (
    <ForecastContext.Provider
      value={{ forecast, tempUnit, setForecast, setTempUnit }}
    >
      {children}
    </ForecastContext.Provider>
  );
}
