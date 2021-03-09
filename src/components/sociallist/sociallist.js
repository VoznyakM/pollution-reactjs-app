import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '136ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


export default function AlignItemsList() {
  const classes = useStyles();
  const [state, setState] = useState([]);

  const fetchData = async () => {        
    const response = await fetch(
      process.env.REACT_APP_BACKEND_API + '/report'
    );
    const areas = await response.json();
    setState({  loading: true,
                volume_map_data:                       
                    areas.map(vol => ({
                      id: vol.id,
                      description: vol.description,
                      address: vol.address,
                      author: vol.author,
                      avatar: vol.avatar,
                      source: vol.source,
                      orig_date: vol.orig_date
                    }))   
    });
  }

  const onClick = () => {
    return alert('Зафіксовано в базі');
  };

  useEffect(() => {
    fetchData();   
  }, []);

  const rows = state.volume_map_data;

  if (!state.loading) {
      return ( <CircularProgress /> );
  }

  return (
  <List className={classes.root}>

  {rows.map(row => {
          return (
            <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={row.author} src={row.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={row.orig_date}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {row.author} 
                  </Typography>
                  &nbsp;" — {row.description}"
                </React.Fragment>
              }
            />
            <Button onClick={onClick}>Зафіксувати</Button>
          </ListItem>
          <Divider variant="inset" component="li" />       
          </>   
          );
        })}

  </List>);

}
