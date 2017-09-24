import React from "react"
import { Component } from "react"

import Grid from "material-ui/Grid"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import { withStyles } from "material-ui/styles"
import TextField from "material-ui/TextField"
import IconButton from "material-ui/IconButton"
import SearchIcon from "material-ui-icons/Search"
import Input from "material-ui/Input"

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    margin: theme.spacing.unit
  }
})

class PropertyListToolbar extends Component {
  render() {
    const { classes, onChange, title, showForm } = this.props
    return (
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Input
            fullWidth
            placeholder="Title"
            defaultValue={title}
            className={classes.input}
            inputProps={{
              "aria-label": "Description"
            }}
            onChange={e => {
              onChange(e.target.value)
            }}
            style={{
              fontWeight: 600,
              fontSize: 24
            }}
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button raised color="accent" className={classes.button} onClick={showForm}>
            +Add Property
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(PropertyListToolbar)
