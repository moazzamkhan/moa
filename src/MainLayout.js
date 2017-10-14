import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import List, { ListItem, ListItemText } from "material-ui/List"
import Avatar from "material-ui/Avatar"
import FolderIcon from "material-ui-icons/Folder"
import Typography from "material-ui/Typography"
import Divider from "material-ui/Divider"
import Button from "material-ui/Button"
import Store from "./store"
import AppToobarContainer from "./AppToolbarContainer"
import SidebarContainer from "./SidebarContainer"
import SidebarHeaderContainer from "./SidebarHeaderContainer"
import ThingRenderer from "./ThingRenderer"

// import { HashRouter as Router, Route, Link } from "react-router-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const drawerWidth = 240

const styles = theme => ({
  root: {
    width: "100%",
    height: "100vh",
    marginTop: 0,
    zIndex: 1,
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%"
  },
  appBar: {    
    boxShadow: "none",
    position: "absolute",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,    
    order: 1
  },
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: drawerWidth
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: theme.spacing.unit * 3,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 48px)",
      overflow: "auto",
      marginTop: 48,
      padding: 5
    }
  }
})

class MainLayout extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classes.appBar}>
              <Route path="/" exact component={() => <AppToobarContainer />} />
              <Route path="/things/:id" component={() => <AppToobarContainer />} />
            </AppBar>
            <Drawer
              type="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <SidebarHeaderContainer />
              <Divider />
              <SidebarContainer />
            </Drawer>
            <main className={classes.content}>
              <Route path="/things/:id" component={() => <ThingRenderer />} />
            </main>
          </div>
        </div>
      </Router>
    )
  }
}
export default withStyles(styles)(MainLayout)
