import React from "react"
import { Component } from "react"
import Paper from "material-ui/Paper"
import Grid from "material-ui/Grid"
import TextField from "material-ui/TextField"

import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import { withStyles } from "material-ui/styles"

import DeleteIcon from "material-ui-icons/Delete"
import IconButton from "material-ui/IconButton"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

class Everything extends Component {
  render() {
    const { things, classes, onChange } = this.props
    return (
      <div>
        <div
          style={{
            padding: 20
          }}
        >
          {things.map(p => (
            <TextField
              disabled
              key={p.id}
              onClick={e => (e.target.disabled = false)}
              onChange={e => onChange(Object.assign(p, { value: e.target.value }))}
              label={p.name}
              placeholder={p.name}
              multiline
              defaultValue={p.value}
              fullWidth
              className={classes.textField}
              margin="normal"
              style={{
                marginBottom: 25
              }}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Everything)
