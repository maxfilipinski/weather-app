import {
  Box,
  Card,
  CardContent,
  CardHeader,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
} from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'src/renderer/context/weatherContext';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import formatTime from 'src/renderer/utils/formatTime';
import styles from './daylightInfo.module.scss';
import 'src/renderer/App.scss';

const StyledLinearProgress = styled(LinearProgress)(() => ({
  width: '100%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#757575',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#fbc02d',
  },
}));

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
  const daylightProgressText = `${daylightTotalHrs} hr ${daylightTotalMins} min`;

  return (
    <Card className={styles.card}>
      <CardHeader title={<Typography>Sun</Typography>} />
      <CardContent>
        <Box className={styles.card__content}>
          <Box>
            <WbTwilightIcon
              fontSize="large"
              className={styles['content__icon--light']}
            />
            <Typography color="text.secondary">Sunrise</Typography>
            <Box className="app__text--bold">{formatTime(sunrise)}</Box>
          </Box>
          <Box>
            <StyledLinearProgress
              variant="determinate"
              value={daylightProgress}
            />
            <Typography sx={{ fontWeight: 'bold' }}>
              {daylightProgressText}
            </Typography>
          </Box>
          <Box>
            <WbTwilightIcon fontSize="large" className="content__icon--dark" />
            <Typography color="text.secondary">Sunset</Typography>
            <Box className="app__text--bold">{formatTime(sunset)}</Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
