import './Menu.scss';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Search } from 'src/renderer/components/Search/Search';
import { Units } from '../Units/Units';

export const Menu = () => {
  return (
    <Box className="menu">
      <AppBar position="static" color="default" enableColorOnDark>
        <Toolbar variant="dense">
          <Typography
            className="menu__title"
            variant="h6"
            component="div"
            noWrap
          >
            Forecast
          </Typography>
          <Units />
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
