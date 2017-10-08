import React from "react"
import { Component } from "react"

import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from "material-ui/Dialog"
import shortid from "shortid"

class NewTypeDialog extends Component {
  constructor() {
    super()
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      type: null
    }
  }

  render() {
    const { open } = this.props
    return (
      <Dialog open={open}>
        <DialogTitle>{"Create New Type"}</DialogTitle>
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
          <Button onClick={this.handleCancel.bind(this)} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk.bind(this)} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  handleCancel() {
    this.props.onNewType(null)
  }

  handleOk() {
    const d = new Date().toJSON()
    this.props.onNewType({ id: shortid.generate(), name: this.state.type, created: d, lastModified: d, type: "typedef"})
  }
  handleOnChange(value) {
    this.setState({ type: value })
  }
}

export default NewTypeDialog
