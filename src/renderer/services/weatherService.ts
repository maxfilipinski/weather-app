import {
  CurrentWeatherDataType,
  GeolocationPositionType,
  TempUnitType,
} from '../data/types';
import * as config from 'src/renderer/config';

async function sendRequest(url: string) {
  const response = await fetch(url);

  return await response.json();
}

async function fetchWeather(
  query: string | GeolocationPositionType,
  tempUnit: TempUnitType,
): Promise<CurrentWeatherDataType> {
  const url =
    typeof query === 'string'
      ? `${config.API_URL}?q=${query}&units=${tempUnit}&appid=${config.API_KEY}`
      : `${config.API_URL}?lat=${query.coords.latitude}&lon=${query.coords.longitude}&units=${tempUnit}&appid=${config.API_KEY}`;

  return await sendRequest(url);
}

export default {
  fetchWeather,
};
