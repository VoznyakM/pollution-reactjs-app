import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import DailyStats from '../daily-stats/daily-stats'
import Map from '../map/map'
import Settings from '../settings/settings'
import Help from '../help/help'
import Report from '../report/report'
import DataList from '../list/list'
import SocialList from '../sociallist/sociallist'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HelpIcon from '@material-ui/icons/Help';
import MapIcon from '@material-ui/icons/Map';
import MailIcon from '@material-ui/icons/Mail';
import ListIcon from '@material-ui/icons/List';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { usePosition } from 'use-position';


// const sanitizers = [
//   {
//     id: 1,
//     title: "Стометрівка",
//     latitude: "48.92",
//     longitude: "24.71",
//   },
//   {
//     id: 2,
//     title: "Плаза",
//     latitude: "48.92",
//     longitude: "24.70",   
//   },
//   {
//     id: 3,
//     title: "Центр",
//     latitude: "48.91",
//     longitude: "24.705",   
//   },
//   {
//     id: 4,
//     title: "Стометрівка 2",
//     latitude: "48.92",
//     longitude: "24.71",
//   },
// ];

// updateMap() {
//   this.covidService.getMap()
//     .then((areas) => {
//       this.setState({
//         volume_map_data: [
//           {
//             data: areas.map(vol => ({
//               id: vol.id,
//               name: vol.title,
//               lat: vol.lat,
//               lng: vol.lng,
//               circle: {
//                 radius: vol.radius,
//                 options: {
//                   strokeColor: vol.color
//                 }
//               }
//             }))  
//           }
//         ]
//       })
//     });
// }


const drawerWidth = 240;

function Red() {
  return <>
  <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
  
<Typography component={'div'}>
<ul>
<p>Шкода від спалювання листя і сухої трави багатолика і надзвичайно небезпечна. На превеликий жаль, українці рідко надають цьому уваги. При згорянні однієї тони рослинних залишків у повітря вивільняється біля 9 кг мікрочастинок диму. До їх складу входять пил, окиси азоту, угарний газ, важкі метали і низка канцерогенних сполук. В тліючому, без доступу кисню, листі виділяється бензопірен, що здатен викликати у людини ракові захворювання. Окрім того, з димом у повітря вивільняються діоксини – одні з найотруйніших для людини речовин. Що можна зробити, щоб зменшити забруднення повітря та негативний вплив на здоров’я людей?</p>
<li>Не спалюйте сміття, меблі, будівельні матеріали, особливо штучно оброблену деревину і ДВП.</li>
<li>Пам’ятайте, що заборонено спалювати такі предмети як картон, всі види пластмас, включаючи пластмасові пляшки з під молока та пластикові пакети, гуму та продукти з неї. Натомість здавайте ці матеріали у пункти вторинної переробки сировини.</li>
<li>Ви можете зменшити забруднення повітря шляхом збільшення величини труби вашого каміну та спалюванням чистого, сухого необробленого та не пофарбованого дерева</li>
<li>Використовуйте компостування та його продукти у вигляді мульчі або інші варіанти безпечної переробки сміття</li> 
</ul>
</Typography>
</Paper>
  </>;
}

function Orange() {
  return <>
  <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
  
<Typography component={'div'}>
<ul>
<p>Шкода від спалювання листя і сухої трави багатолика і надзвичайно небезпечна. На превеликий жаль, українці рідко надають цьому уваги. При згорянні однієї тони рослинних залишків у повітря вивільняється біля 9 кг мікрочастинок диму. До їх складу входять пил, окиси азоту, угарний газ, важкі метали і низка канцерогенних сполук. В тліючому, без доступу кисню, листі виділяється бензопірен, що здатен викликати у людини ракові захворювання. Окрім того, з димом у повітря вивільняються діоксини – одні з найотруйніших для людини речовин. Що можна зробити, щоб зменшити забруднення повітря та негативний вплив на здоров’я людей?</p>
<li>Не спалюйте сміття, меблі, будівельні матеріали, особливо штучно оброблену деревину і ДВП.</li>
<li>Пам’ятайте, що заборонено спалювати такі предмети як картон, всі види пластмас, включаючи пластмасові пляшки з під молока та пластикові пакети, гуму та продукти з неї. Натомість здавайте ці матеріали у пункти вторинної переробки сировини.</li>
<li>Ви можете зменшити забруднення повітря шляхом збільшення величини труби вашого каміну та спалюванням чистого, сухого необробленого та не пофарбованого дерева</li>
<li>Використовуйте компостування та його продукти у вигляді мульчі або інші варіанти безпечної переробки сміття</li> 
</ul>
</Typography>
  </Paper>
  </>;
}

function Yellow() {
  return <>
  <Paper variant="outlined"  style={{padding: 1 + 'em'}}>
  
<Typography component={'div'}>
<ul>
<p>Шкода від спалювання листя і сухої трави багатолика і надзвичайно небезпечна. На превеликий жаль, українці рідко надають цьому уваги. При згорянні однієї тони рослинних залишків у повітря вивільняється біля 9 кг мікрочастинок диму. До їх складу входять пил, окиси азоту, угарний газ, важкі метали і низка канцерогенних сполук. В тліючому, без доступу кисню, листі виділяється бензопірен, що здатен викликати у людини ракові захворювання. Окрім того, з димом у повітря вивільняються діоксини – одні з найотруйніших для людини речовин. Що можна зробити, щоб зменшити забруднення повітря та негативний вплив на здоров’я людей?</p>
<li>Не спалюйте сміття, меблі, будівельні матеріали, особливо штучно оброблену деревину і ДВП.</li>
<li>Пам’ятайте, що заборонено спалювати такі предмети як картон, всі види пластмас, включаючи пластмасові пляшки з під молока та пластикові пакети, гуму та продукти з неї. Натомість здавайте ці матеріали у пункти вторинної переробки сировини.</li>
<li>Ви можете зменшити забруднення повітря шляхом збільшення величини труби вашого каміну та спалюванням чистого, сухого необробленого та не пофарбованого дерева</li>
<li>Використовуйте компостування та його продукти у вигляді мульчі або інші варіанти безпечної переробки сміття</li> 
</ul>
</Typography>
</Paper>
  </>;
}

function Green() {
  return <>
  <Paper variant="outlined"  style={{padding: 1 + 'em'}}>

<Typography component={'div'}>
<ul>
<p>Шкода від спалювання листя і сухої трави багатолика і надзвичайно небезпечна. На превеликий жаль, українці рідко надають цьому уваги. При згорянні однієї тони рослинних залишків у повітря вивільняється біля 9 кг мікрочастинок диму. До їх складу входять пил, окиси азоту, угарний газ, важкі метали і низка канцерогенних сполук. В тліючому, без доступу кисню, листі виділяється бензопірен, що здатен викликати у людини ракові захворювання. Окрім того, з димом у повітря вивільняються діоксини – одні з найотруйніших для людини речовин. Що можна зробити, щоб зменшити забруднення повітря та негативний вплив на здоров’я людей?</p>
<li>Не спалюйте сміття, меблі, будівельні матеріали, особливо штучно оброблену деревину і ДВП.</li>
<li>Пам’ятайте, що заборонено спалювати такі предмети як картон, всі види пластмас, включаючи пластмасові пляшки з під молока та пластикові пакети, гуму та продукти з неї. Натомість здавайте ці матеріали у пункти вторинної переробки сировини.</li>
<li>Ви можете зменшити забруднення повітря шляхом збільшення величини труби вашого каміну та спалюванням чистого, сухого необробленого та не пофарбованого дерева</li>
<li>Використовуйте компостування та його продукти у вигляді мульчі або інші варіанти безпечної переробки сміття</li> 
</ul>
</Typography>
</Paper>
  </>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={CustomLink}>
        <ListItemIcon>{icon}</ListItemIcon> 
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}


export default function MyAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState([])
  const [status, setStatus] = useState([]);
  const [sanitizer, setSanitizer] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const watch = true;
  const {
    latitude,
    longitude,
  } = usePosition(watch);
  
  const fetchData = async () => {
        
    const response = await fetch(
      process.env.REACT_APP_BACKEND_API + '/area'
    );
    const areas = await response.json();
    setState({
                volume_map_data: 
                  
                    areas.map(vol => ({
                      id: vol.id,
                      title: vol.title,                         
                      latitude: vol.lat,
                      longitude: vol.lng,
                      circle: {
                        radius: vol.radius,
                        options: {
                          strokeColor: '#' + vol.color
                        }
                      }
                    }))   
    });    
    
    // console.log(state.volume_map_data);      
};

const fetchSanitizer = async () => {
        
  const response = await fetch(
    process.env.REACT_APP_BACKEND_API + '/sanitizer'
  );
  const sanitizers = await response.json();
  setSanitizer({
              volume_map_sanitizer:  
                  sanitizers.map(vol => ({
                    id: vol.id,
                    title: vol.title,                         
                    latitude: vol.lat,
                    longitude: vol.lng,
                  }))   
  });      
  // console.log(state.volume_map_sanitizer);      
};

// async function getValue(value) {
//   const response = await fetch(
//     process.env.REACT_APP_BACKEND_API + '/setting/' + value
//   );
//   const value = await response.json();
// }

const initData = async () => {
        
  const response = await fetch(
    process.env.REACT_APP_BACKEND_API + '/setting/status_id'
  );
  const status_id = await response.json();

  // const status_id = getValue('status_id');

  const response_orange = await fetch(
    process.env.REACT_APP_BACKEND_API + '/setting/orange'
  );
  const orange = await response_orange.json();

  let type = 3;
  let status_name = '';
  let status_link = '';
  let content = '';
  switch (status_id.value) {
      case "1": type = "error"; status_name = "червоній"; status_link = "red"; content = ''; break;
      case "2": type = "warning";  status_name = "помаранчевій"; status_link = "orange"; content = orange; break;
      case "3": type = "info"; status_name = "жовтій"; status_link = "yellow"; break;
      case "4": default: type = "success"; status_name = "зеленій"; status_link = "green"; break;
  }
  setStatus({
    status_id: status_id.value,
    type: type,
    name: status_name,
    link: status_link
  });      
};

  useEffect(() => {
     initData();   
     fetchData();   
     fetchSanitizer();   
    }, []);

    // console.log('stat ', status.type_id);      

  // const [volume_map_sanitizer, fetchSanitizer] = useState(0);

  const google_map_key = process.env.GOOGLE_MAP_KEY;
  // console.log(google_map_key);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          Wildfire Alert System
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List onClick={handleDrawerClose}  >
          <ListItemLink primary={'Iнформація'} icon={<EqualizerIcon />} to='/' />
          <ListItemLink primary={'Рекомендації'} icon={<HelpIcon />} to='/help' />
          <ListItemLink primary={'Карта'} icon={<MapIcon />} to='/map' />
          <ListItemLink primary={'Звіт'} icon={<MailIcon />} to='/report' />
          <ListItemLink primary={'Список інцидентів'} icon={<ListIcon />} to='/list' />
          <ListItemLink primary={'Соціальні мережі'} icon={<ListAltIcon />} to='/social' />
          <ListItemLink primary={'Про проєкт'} icon={<InboxIcon />} to='/settings' />
        </List>

        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Alert severity={status.type}>
        <AlertTitle>УВАГА</AlertTitle>
      Івано-Франківськ - Зафіксовано велику кількість підпалів сухої трави <Link to={status.link}>Дивіться наші рекомендації</Link></Alert>

        <Switch>
          <Route path="/red">
            <Red />
          </Route>
          <Route path="/orange">
            <Orange />
          </Route>
          <Route path="/yellow">
            <Yellow />
          </Route>
          <Route path="/green">
            <Green />
          </Route>           
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/list">
            <DataList />
          </Route>
          <Route path="/social">
            <SocialList />
          </Route>
          <Route path="/map">
          <Map 
    center={{ lat: 48.92, lng: 24.71 }}
    zoom={12}
    latitude={latitude} 
    longitude={longitude} 
    places={state.volume_map_data}
    sanitizers={sanitizer.volume_map_sanitizer} 
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLlwasnMbQP4pp1Qx0poPnCqnJ_C1lPhk"  
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `800px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
          </Route>
          <Route path="/">
            <DailyStats />
          </Route>    
        </Switch>
      
        
      </main>
      </Router>
    </div>
  );
}