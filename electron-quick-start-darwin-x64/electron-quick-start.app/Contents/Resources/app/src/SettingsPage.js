import React from "react"
import { Component } from "react"
import Paper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import Input, { InputLabel } from "material-ui/Input"
import { FormControl, FormHelperText } from "material-ui/Form"
import Button from "material-ui/Button"
import Typography from "material-ui/Typography"

export default class SettingsPage extends Component {
  constructor() {
    super()
    this.state = {
      location: null
    }
  }
  render() {
    return (
      <div>
        <Paper
          elevation={2}
          style={{
            margin: "100px auto",
            width: 600,
            padding: 20
          }}
        >
          <FormControl style={{ fontSize: 28 }} fullWidth>
            <InputLabel htmlFor="store-location">Local Store Location</InputLabel>
            <Input id="store-location" onChange={this.handleChange.bind(this)} />
            <FormHelperText>Please provide a folder or directory full path where do you want to save your data.</FormHelperText>
          </FormControl>
          <Button raised color="accent" style={{ marginTop: 30, marginBottom: 30 }} onClick={this.handleClick.bind(this)}>
            Save
          </Button>
          <Typography type="body1" gutterBottom>
            It would be a good idea to pick a place somewhere inside a Local <a href="https://www.google.com/drive/">Google Drive</a>,
            <a href="https://onedrive.live.com/">One Drive</a>, <a href="https://www.dropbox.com/">Dropbox</a> folder, so that it gets
            backed up regularly.In future, I am planning to add support for Google Drive, One Drive and Dropbox
          </Typography>
        </Paper>
      </div>
    )
  }
  handleClick() {
    this.props.onSave(this.state.location)
  }
  handleChange(e) {
    this.setState({
      location: e.target.value
    })
  }
}
