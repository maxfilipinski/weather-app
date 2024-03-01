import { useContext } from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import {
  WeatherContext,
  TempUnitType,
} from 'src/renderer/context/weatherContext';
import './units.scss';

export default function Units() {
  const forecastCtx = useContext(WeatherContext);

  const onUnitChangeHandler = (event: SelectChangeEvent) => {
    forecastCtx.setTempUnit(event.target.value as TempUnitType);
    forecastCtx.fetchData();
  };

  return (
    <FormControl size="small">
      <Select
        className="select"
        id="temp-units"
        value={forecastCtx.tempUnit}
        onChange={onUnitChangeHandler}
      >
        <MenuItem value={'metric'}>°C</MenuItem>
        <MenuItem value={'imperial'}>°F</MenuItem>
        <MenuItem value={'standard'}>°K</MenuItem>
      </Select>
    </FormControl>
  );
}
