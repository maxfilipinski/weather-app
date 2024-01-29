import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

const Units = (props) => {
  const [unit, setUnit] = useState('metric');

  const unitChangeHandler = (event, newUnit) => {
    if (newUnit !== null) setUnit(newUnit);

    props.onUnitChange(newUnit);
  };

  return (
    <ToggleButtonGroup
      className="search-actions"
      color="primary"
      value={unit}
      exclusive
      onChange={unitChangeHandler}
      aria-label="Units"
    >
      <ToggleButton value="metric">Metric</ToggleButton>
      <ToggleButton value="imperial">Imperial</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Units;
