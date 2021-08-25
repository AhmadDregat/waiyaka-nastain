
import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withRouter } from "react-router";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Relations from'./Relations'
import News from './News'
import Home from './Home'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
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
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    width: drawerWidth,
  },
  drawerHeader: {
    textAlign:'right',
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
      duration: theme.transitions.duration.shortest,
    }),
    marginRight: -drawerWidth,
  },
  menuItemText:{
    textAlign:'right' 
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

 function BorgerBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div>
    <div className={classes.root}>
      <CssBaseline />
      
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
     
        
   
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} >
          <span className="title">القائمة</span>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
     
        <List>
          { ["مسبحة" ,"اخر الاخبار"].map((text, index) => (
             <ListItem  button key={text} onClick={()=> { switch(text) {
              case "اخر الاخبار":
                props.history.push(`/news`)
                break;
              case "مسبحة":
                props.history.push(`/Mesbaha`)
                break;
        } } } >
           
              <ListItemText className={classes.menuItemText} primary={text} />
            </ListItem>
          ))}
        </List>
            <Divider/>
            <List>
          {[ 'العلاقة مع الله', 'العلاقه مع النفس', 'العلاقة مع الاخرين'].map((text, index) => (
            <ListItem  button key={text} onClick={()=> {  props.history.push(`/relations/${text}`) } } >
              <ListItemText className={classes.menuItemText} primary={text} />
            </ListItem>
          ))}
        </List>
        
       
      
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <div className={classes.drawerHeader}/> */}
        
      

      </main>
    </div>
    </div>
    </Router>
  )
}
export default withRouter(BorgerBar)