import React, {useEffect} from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EventIcon from '@material-ui/icons/Event';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Test from './Components/Test.js';


function App(props) {

    const useStyles = makeStyles(theme => ({
      navbar: {
        flexGrow: 1,
        background: '#000000',
      },
      navicon: {
        color: '#75787bff',
        '&$selected': {
          color: '#86bc25ff',
        },
      },
      title: {
        flexGrow: 1,
      },
      toolbar: {
        flexGrow: 1,
        background: '#012169f',
      },
      selected: { color: '#86bc25ff'},
    }));

    const classes = useStyles();
    const [value, setValue] = React.useState('Home');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
      switch(window.location.pathname) {
        case "/":
          setValue("Home");
          break;
        case "/events":
          setValue("Events");
          break;
        case "/deals":
          setValue("Deals");
          break;
        case "/parking":
          setValue("Parking");
          break;
        case "/alerts":
          setValue("Alerts");
          break;
        case "/profile":
          setValue("Profile");
          break;
        default:
          setValue("Page Not Found");
      }
    }, []);

    return (
      <div>
      	<Router>
          <div className='main-navbar'>
            <BottomNavigation value={value} onChange={handleChange} className={classes.navbar}>
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/' name='Home' label="Home" value="Home" icon={<HomeIcon/>}/>
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/events' name='Events' label="Events" value="Events" icon={<EventIcon/>}/> 
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/deals' name='Deals' label="Deals" value="Deals" icon={<MoneyOffIcon/>}/> 
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/parking' name='Parking' label="Parking" value="Parking" icon={<DirectionsCarIcon/>}/> 
              <BottomNavigationAction classes={{root: classes.navicon, selected: classes.selected, }} component={Link} to='/alerts' name='Alerts' label="Alerts" value="Alerts" icon={<NotificationsIcon/>}/> 
            </BottomNavigation>
          </div>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.title}>
                SmartCity » {value}
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <div className="mobile-simulation">
            <Switch>
              <Route key='home' path='/' exact component={() => <Test test="HOME"/>}/>
              <Route key='events' path='/events' exact component={() => <Test test="EVENTS"/>}/>
              <Route key='deals' path='/deals' exact component={() => <Test test="DEALS"/>}/>
              <Route key='parking' path='/parking' exact component={() => <Test test="PARKING"/>}/>
              <Route key='alerts' path='/alerts' exact component={() => <Test test="ALERTS"/>}/>
              <Route key='profile' path='/profile' exact component={() => <Test test="PROFILE"/>}/>
              <Route component={() => <Test test="404 PAGE"/>}/>
            </Switch>
            <br/>
          </div>
        </Router>
      </div>
    );

  }

export default App;
