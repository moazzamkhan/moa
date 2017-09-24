import React from "react"
import { Component } from "react"

import Grid from "material-ui/Grid"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import { withStyles } from "material-ui/styles"
import TextField from "material-ui/TextField"
import SearchIcon from "material-ui-icons/Search"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import {} from "material-ui/colors"

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
})

class AppHeader extends Component {
  render() {
    const { classes, onSave } = this.props

    return (
      <div
        style={{
          padding: 5,
          backgroundColor: "#C51162"
        }}
      >
        <Grid container spacing={16}>
          <Grid item xs={6} />
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button color="contrast" onClick={onSave}>
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}
// <TextField
// label="Search"
// id="search"
// placeholder="Search..."
// fullWidth
// className={classes.textField}
// />

export default withStyles(styles)(AppHeader)
