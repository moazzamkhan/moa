import React from "react"
import { Component } from "react"

import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from "material-ui/Dialog"
import shortid from "shortid"
import ThingFactory from "./ThingFactory"

class NewThingDialog extends Component {
  constructor() {
    super()
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      thing: null
    }
  }

  render() {
    const { open } = this.props
    return (
      <Dialog open={open}>
        <DialogTitle>{"Create a Thing"}</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: 400 }}
            placeholder="New Thing"
            autoFocus
            margin="normal"
            helperText=""
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
    this.props.onNewThing(null)
  }

  handleOk() {    
    if (this.state.thing) {
      this.props.onNewThing(ThingFactory.createText({ name: this.state.thing }))
    } else {
      this.handleCancel()
    }
  }

  handleOnChange(value) {
    this.setState({ thing: value })
  }
}

export default NewThingDialog
