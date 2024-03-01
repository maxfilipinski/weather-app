import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Search from 'src/renderer/components/search/search';
import Units from '../units/units';

export default function Menu() {
  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static" enableColorOnDark>
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
