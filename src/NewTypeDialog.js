import React from "react"
import { Component } from "react"

import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from "material-ui/Dialog"
import shortid from "shortid"
import ThingFactory from "./ThingFactory"

class NewTypeDialog extends Component {
  state = {
    type: null
  }

  render() {
    const { open } = this.props
    return (
      <Dialog open={open}>
        <DialogTitle>{"Create a Type"}</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: 400 }}
            placeholder="New Type"
            autoFocus
            margin="normal"
            helperText="Kebab case with small cases(a-z) and digits(0-9). Dont start with digits or '-'. Dont use two or more dashes to separate words."
            onChange={e => this.handleOnChange(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  handleCancel = () => {
    this.props.onNewType(null)
  }

  handleOk = () => {    
    if (this.state.type) {
      this.props.onNewType(ThingFactory.createType({name: this.state.type}))
    } else {
      this.handleCancel()
    }
  }
  handleOnChange = value => {
    this.setState({ type: value })
  }
}

export default NewTypeDialog
