import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { BrowserRouter as Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Статистика" value="/" icon={<RestoreIcon />} component={Link} to="/"  />
      <BottomNavigationAction label="Допомога" component={Link} to="/users" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Карта" component={Link} to="/about" icon={<LocationOnIcon />} />
    </BottomNavigation> 
  );
}