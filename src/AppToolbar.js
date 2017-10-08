import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "material-ui/styles"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import IconButton from "material-ui/IconButton"
import MenuIcon from "material-ui-icons/Menu"

const styles = theme => ({
  title: {
    flex: 1,
    color: "rgba(0, 0, 0, 0.87)"
  }
})

class AppToobar extends Component {
  render() {
    const { classes, title, onSave } = this.props

    return (
      <Toolbar>
        <Typography type="title" color="inherit" className={classes.title}>
          {title}
        </Typography>
        <Button raised color="default" onClick={onSave} style={{marginRight: 10}}>
          Save
        </Button>
        <Button raised scolor="default" onClick={onSave}>
          +New
        </Button>
      </Toolbar>
    )
  }
}

export default withStyles(styles)(AppToobar)
