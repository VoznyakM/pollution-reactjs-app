import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default class BottomNav extends Component {

  setValue(newValue) {
    this.setState({
      value: newValue
    });
  }

  render()  {
    //const [value, setValue] = this.props; // React.useState(0);    
    const classes = this.props; // useStyles();
    const state = {
      value: 0,
    };

    return (
<BottomNavigation
  value={state.value}
  onChange={(event, newValue) => {
    this.setValue(newValue);
  }}
  showLabels
  className={classes.root}
>
  <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
</BottomNavigation>
    )
  }

}