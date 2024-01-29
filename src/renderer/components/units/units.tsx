import { useContext } from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import {
  ForecastContext,
  TempUnitType,
} from 'src/renderer/context/forecastContext';

const Units = () => {
  const forecastCtx = useContext(ForecastContext);

  const onUnitChangeHandler = (event: SelectChangeEvent) => {
    forecastCtx.setTempUnit(event.target.value as TempUnitType);
  };

  return (
    <Select
      id="temp-units"
      value={forecastCtx.tempUnit}
      onChange={onUnitChangeHandler}
    >
      <MenuItem value={'metric'}>°C</MenuItem>
      <MenuItem value={'imperial'}>°F</MenuItem>
      <MenuItem value={'standard'}>°K</MenuItem>
    </Select>
  );
};

export default Units;
