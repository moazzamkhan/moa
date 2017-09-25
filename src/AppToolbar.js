import React from "react"
import { Component } from "react"

import Button from "material-ui/Button"
import { withStyles } from "material-ui/styles"
import Toolbar from "material-ui/Toolbar"

const styles = theme => ({})

class AppToobar extends Component {
  render() {
    const { classes, onSave } = this.props

    return (
      <Toolbar>
        <Button color="default" onClick={onSave}>
          Save
        </Button>
      </Toolbar>
    )
  }
}

export default withStyles(styles)(AppToobar)
