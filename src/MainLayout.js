import React, { Component } from "react"
import { withStyles } from "material-ui/styles"
import Drawer from "material-ui/Drawer"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Divider from "material-ui/Divider"
import AppToobarContainer from "./AppToolbarContainer"
import SidebarContainer from "./SidebarContainer"
import SidebarHeaderContainer from "./SidebarHeaderContainer"
import ThingRenderer from "./ThingRenderer"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { updateThing } from "./actions"

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
      height: "calc(100% - 64px)",
      overflow: "auto",
      marginTop: 64,
      padding: 5
    }
  }
})

const MainLayout = ({ things, classes, match, onThingUpdated }) => {
  const { type, id } = match.params
  if (!id && things.length) {
    return <Redirect to={"/" + type + "/" + things[0].id} />
  } else {
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <AppToobarContainer {...{ type, id }} />
          </AppBar>
          <Drawer
            type="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <SidebarHeaderContainer {...{ type, id }} />
            <Divider />
            <SidebarContainer {...{ things, type, id }} />
          </Drawer>
          <main className={classes.content}>
            {id ? (
              <ThingRenderer {...{ type, id }} onChange={thing => onThingUpdated(thing)} />
            ) : (
              <h1>Nothing is here. Please create one</h1>
            )}
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ things }, { match }) => {
  return {
    things: things
      .filter(t => t.type === match.params.type)
      .sort((a, b) => new Date(a.lastModified).getTime() < new Date(b.lastModified).getTime())
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onThingUpdated: thing => dispatch(updateThing(thing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainLayout))
