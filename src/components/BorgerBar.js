import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
// import { withRouter } from "react-router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "../styles/BorgerBar.css";
import Relations from "./Relations";
import News from "./News";
import Home from "./Home";
import { Typography } from "@material-ui/core";
import web_logo from "../images/logo.png";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  logo: {
    float: "right",
  },
  root: {
    display: "flex",
  },
  appBar: {
    background: "#264653",
    color: "white",
    marginBottom: 20,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    background: "#264653",
    color: "white",
    width: drawerWidth,
  },
  drawerHeader: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
    marginRight: -drawerWidth,
  },
  menuItemText: {
    textAlign: "right",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
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
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
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

            <img
              className="logo"
              width="50"
              height="50"
              src={web_logo}
            />
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <span className="title">القائمة</span>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List>
            <Link to="/news">
              <ListItem button>
                <ListItemText
                  className={classes.menuItemText}
                  primary="اخر الاخبار"
                  onClick={handleDrawerClose}
                />
              </ListItem>
            </Link>

            <Link to="/homepage">
              <ListItem button>
                <ListItemText
                  className={classes.menuItemText}
                  primary="صفحه الرئيسيه"
                  onClick={handleDrawerClose}
                />
              </ListItem>
            </Link>

            <Link to="/tsabeh">
              <ListItem button>
                <ListItemText
                  className={classes.menuItemText}
                  primary="تسابيح"
                  onClick={handleDrawerClose}
                />
              </ListItem>
            </Link>

            <Link to="/Mesbaha">
              <ListItem button>
                <ListItemText
                  className={classes.menuItemText}
                  primary="مسبحة"
                  onClick={handleDrawerClose}
                />
              </ListItem>
            </Link>
          </List>
          <Divider />

          <List>
            {["العلاقة مع الله", "العلاقه مع النفس", "العلاقة مع الاخرين"].map(
              (text, index) => (
                <Link to={{ pathname: `relations/${text}` }}>
                  <ListItem button key={text}>
                    <ListItemText
                      className={classes.menuItemText}
                      primary={text}
                      onClick={handleDrawerClose}
                    />
                  </ListItem>
                </Link>
              )
            )}
           <Link to="/login">
              <ListItem button>
                <ListItemText
                  className={classes.menuItemText}
                  primary="تسجيل دخول"
                  onClick={handleDrawerClose}
                />
              </ListItem>
            </Link> 
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
  );
}
export default BorgerBar;
