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
import PropertyListToolbar from "./PropertyListToolbar"
import PersonalInfoForm from "./PersonalInfoForm"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

class PropertyList extends Component {
  constructor() {
    super()
    this.state = {
      canShowForm: false
    }
  }
  render() {
    const { properties, classes, onChange, onTitleChange, title, onPropertyAdd } = this.props
    return (
      <div>
        <PropertyListToolbar onChange={onTitleChange} title={title} showForm={this.showForm.bind(this)} />
        <div
          style={{
            padding: 20,
            display: this.state.canShowForm ? "block" : "none"
          }}
        >
          <PersonalInfoForm
            onSubmit={p => {
              onPropertyAdd(p)
              this.hideForm()
            }}
            onCancel={this.hideForm.bind(this)}
          />
        </div>
        <div
          style={{
            padding: 20
          }}
        >
          {properties.map(p => (
            <TextField
              key={p.id}
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
  hideForm() {
    this.setState({
      canShowForm: false
    })
  }
  showForm() {
    this.setState({
      canShowForm: true
    })
  }
}

export default withStyles(styles)(PropertyList)
