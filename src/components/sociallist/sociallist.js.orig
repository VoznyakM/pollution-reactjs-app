import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

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

  const onClick = () => {
    return alert('Зафіксовано в базі');
  };  
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://znaj.ua/crops/38946a/620x0/1/0/2020/12/22/jIAi2c7pj4xipth8BrBoiKbsD8P9xa89dAtvic7d.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Twitter, 3 Feb 2019"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                NGO.DONETSK.UA
              </Typography>
              {" — У Маріуполі підпал листя коштуватиме 1700 грн http://bit.ly/ccUsj3"}
            </React.Fragment>
          }
        />
        <Button onClick={onClick}>Зафіксувати</Button>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://abs.twimg.com/errors/logo46x38.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Twitter, 10 Nov 2015"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Stanislavske.TV 
              </Typography>
              {" — В Івано-Франківську за підпал листя за тиждень склали 6 адміністративних протоколів"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Facebook, 28 Oct 2020"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                 Патрульна поліція Краматорська та Слов'янська
              </Typography>
              {' — В Івано-Франківську за підпал листя за тиждень склали 6 адміністративних протоколів'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://znaj.ua/crops/38946a/620x0/1/0/2020/12/22/jIAi2c7pj4xipth8BrBoiKbsD8P9xa89dAtvic7d.jpeg" />
        </ListItemAvatar>
        <ListItemText
          primary="Twitter, 3 Feb 2019"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                NGO.DONETSK.UA
              </Typography>
              {" — У Маріуполі підпал листя коштуватиме 1700 грн http://bit.ly/ccUsj3"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Twitter, 10 Nov 2015"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Stanislavske.TV 
              </Typography>
              {" — В Івано-Франківську за підпал листя за тиждень склали 6 адміністративних протоколів"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Facebook, 28 Oct 2020"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                 Патрульна поліція Краматорська та Слов'янська
              </Typography>
              {' — В Івано-Франківську за підпал листя за тиждень склали 6 адміністративних протоколів'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
