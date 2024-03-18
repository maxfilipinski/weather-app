import {
  Box,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import formatTime from 'src/renderer/utils/formatTime';

export const DaylightInfo = () => {
  const forecastCtx = useContext(WeatherContext);
  const sunrise = new Date(forecastCtx.currentWeatherData.sys.sunrise * 1000);
  const sunset = new Date(forecastCtx.currentWeatherData.sys.sunset * 1000);
  const daylight = sunset.valueOf() - sunrise.valueOf(); // result in ms
  const daylightTotalHrs = Math.floor(
    (daylight % (1000 * 60 * 60 * 24)) / 3600000,
  );
  const daylightTotalMins = Math.round(
    ((daylight % (1000 * 60 * 60 * 24)) % 3600000) / 60000,
  );
  const daylightProgress =
    Date.now() > sunset.valueOf()
      ? 100
      : 100 - ((sunset.valueOf() - Date.now()) / daylight) * 100;

  return (
    <Card
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', color: 'white' }}
    >
      <CardHeader title={<Typography>Sun/Moon</Typography>} />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textAlign: 'center',
          }}
        >
          <Box>
            <WbTwilightIcon fontSize="large" sx={{ color: 'orange' }} />
            <Typography color="text.secondary">Sunrise</Typography>
            <Box sx={{ fontWeight: 'bold' }}>{formatTime(sunrise)}</Box>
          </Box>
          <Box
            style={{
              textAlign: 'center',
            }}
          >
            <LinearProgress
              variant="determinate"
              value={daylightProgress}
              sx={{
                width: '100px',
              }}
            />
            <Typography
              sx={{ fontWeight: 'bold' }}
            >{`${daylightTotalHrs} h ${daylightTotalMins} mins`}</Typography>
          </Box>
          <Box>
            <WbTwilightIcon fontSize="large" sx={{ color: 'gray' }} />
            <Typography color="text.secondary">Sunset</Typography>
            <Box sx={{ fontWeight: 'bold' }}>{formatTime(sunset)}</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
