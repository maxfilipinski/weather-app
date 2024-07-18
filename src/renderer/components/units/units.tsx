import './Units.scss';
import { useCallback, useContext } from 'react';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import weatherService from 'src/renderer/services/weatherService';
import { TempUnitType } from 'src/renderer/data/types';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export const Units = () => {
  const { tempUnit, setTempUnit, location, setWeather } =
    useContext(WeatherContext);

  const onUnitChange = useCallback(
    async (event: SelectChangeEvent) => {
      const newTempUnit = event.target.value as TempUnitType;
      setTempUnit(newTempUnit);

      try {
        weatherService
          .fetchWeather(location, newTempUnit)
          .then((weather) =>
            setWeather({ ...weather, lastUpdate: Date.now() }),
          );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    [setTempUnit, location, setWeather],
  );

  return (
    <FormControl size="small" className="units">
      <Select
        className="units__select"
        id="temp-units"
        value={tempUnit}
        onChange={onUnitChange}
      >
        <MenuItem value={'metric'}>°C</MenuItem>
        <MenuItem value={'imperial'}>°F</MenuItem>
        <MenuItem value={'standard'}>°K</MenuItem>
      </Select>
    </FormControl>
  );
};
