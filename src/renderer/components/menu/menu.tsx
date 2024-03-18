import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Search from 'src/renderer/components/search/search';
import Units from '../units/units';

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" enableColorOnDark>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Forecast
          </Typography>
          <Units />
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
