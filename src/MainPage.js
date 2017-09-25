import React, {Component} from "react"
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
import EverythingPage from "./EverythingPage"
import NewThingForm from "./NewThingForm"
import LocalThingsStore from "./LocalThingsStore"
import AppToolbar from "./AppToolbar"

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
    backgroundColor: "#fafafa",
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
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    padding: theme.spacing.unit * 3,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64
    }
  }
})

class MainPage extends Component {
  constructor() {
    super()
    this.state = LocalThingsStore.getData()
  }

  render() {
    const { classes } = this.props
    return (
      <Router>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar className={classes.appBar}>
              <AppToolbar onSave={this.onSave.bind(this)} />
            </AppBar>
            <Drawer
              type="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div
                className={classes.drawerHeader}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Button raised color="accent" component={Link} to="/new">
                  +New Thing
                </Button>
              </div>
              <Divider />
              <List>
                <ListItem component={Link} to="/">
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                  <ListItemText primary="Everything" secondary="Jan 9, 2016" />
                </ListItem>
                <ListItem component={Link} to="/about">
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2016" />
                </ListItem>
              </List>
            </Drawer>
            <main className={classes.content}>
              <Route exact path="/" component={() => <EverythingPage {...this.state}/>} />
              <Route path="/new" component={() => <NewThingForm onThingAdd={this.onThingAdd.bind(this)} />} />
            </main>
          </div>
        </div>
      </Router>
    )
  }

  onSave() {
    LocalThingsStore.setData(this.state)
  }

  onThingAdd(t) {
    if (t) {
      t.id = this.state.things.length
      this.setState({
        things: [...this.state.things, t]
      })
    }
  }
}

export default withStyles(styles)(MainPage)
