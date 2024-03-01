import {
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

export const DaylightInfo = () => {
  const forecastCtx = useContext(WeatherContext);
  const sunrise = new Date(
    forecastCtx.currentWeatherData.sys.sunrise * 1000,
  ).valueOf();
  const sunset = new Date(
    forecastCtx.currentWeatherData.sys.sunset * 1000,
  ).valueOf();
  const diff = sunset - sunrise;
  const daylightTotalHrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / 3600000);
  const daylightTotalMins = Math.floor(
    ((diff % (1000 * 60 * 60 * 24)) % 3600000) / 60000,
  );
  const daylightLeft =
    Date.now() > sunset ? 100 : ((sunset - Date.now()) / 86400000) * 100;

  return (
    <Card>
      <CardHeader title={<Typography>Sun/Moon</Typography>} />
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <WbTwilightIcon fontSize="large" sx={{ color: 'orange' }} />
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <LinearProgress
              variant="determinate"
              value={daylightLeft}
              sx={{
                width: '100px',
              }}
            />
            <span>{`${daylightTotalHrs} h ${daylightTotalMins} mins`}</span>
          </div>

          <WbTwilightIcon fontSize="large" sx={{ color: 'gray' }} />
        </div>
      </CardContent>
    </Card>
  );
};
