import './units.scss';
import { useContext } from 'react';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import weatherService from 'src/renderer/services/weatherService';
import { TempUnitType } from 'src/renderer/data/types';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export default function Units() {
  const weatherCtx = useContext(WeatherContext);

  const onUnitChangeHandler = (event: SelectChangeEvent) => {
    const newTempUnit = event.target.value as TempUnitType;
    weatherCtx.setTempUnit(newTempUnit);

    weatherService
      .fetchWeather(weatherCtx.location, newTempUnit)
      .then((weather) =>
        weatherCtx.setWeather({ ...weather, lastUpdate: Date.now() }),
      );
  };

  return (
    <FormControl size="small">
      <Select
        className="select"
        id="temp-units"
        value={weatherCtx.tempUnit}
        onChange={onUnitChangeHandler}
      >
        <MenuItem value={'metric'}>°C</MenuItem>
        <MenuItem value={'imperial'}>°F</MenuItem>
        <MenuItem value={'standard'}>°K</MenuItem>
      </Select>
    </FormControl>
  );
}
