import React from "react"
import { Component } from "react"

import IconButton from "material-ui/IconButton"
import { withStyles } from "material-ui/styles"
import Toolbar from "material-ui/Toolbar"
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table"
import Paper from "material-ui/Paper"
import DeleteIcon from "material-ui-icons/Delete"
import AddCircleOutlineIcon from "material-ui-icons/AddCircleOutline"
import RemoveCircleOutlineIcon from "material-ui-icons/RemoveCircleOutline"
import TextField from "material-ui/TextField"
import Input from "material-ui/Input"
import Button from "material-ui/Button"
import Switch from "material-ui/Switch"
import Select from "material-ui/Select"
import Divider from "material-ui/Divider"
import shortid from "shortid"
import PropertyForm from "./PropertyForm"

const styles = theme => ({
  paper: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    borderRadius: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    overflowX: "auto"
  },
  inlineDiv50PercentWidth: {
    width: "50%",
    display: "inline-block"
  }
})

class NewTypeForm extends Component {
  constructor(props) {
    super(props)
    this.handleTypeNameChange = this.handleTypeNameChange.bind(this)

    this.state = {
      typeName: props.type.name,
      properties: props.type.properties
    }
  }

  render() {
    const { classes, typeList } = this.props

    return (
      <div>
        <Paper className={classes.paper}>
          <div>
            <div className={classes.inlineDiv50PercentWidth}>
              <TextField
                placeholder="Type Name"
                margin="normal"
                defaultValue={this.state.typeName}
                name="type-name"
                onChange={e => this.handleTypeNameChange(e.target.value)}
              />
            </div>
            <div className={classes.inlineDiv50PercentWidth} style={{ textAlign: "right" }}>
              <Button raised color="primary" onClick={this.handleSave.bind(this)}>
                Save
              </Button>
            </div>
          </div>
        </Paper>
        <Paper className={classes.paper}>
          <Divider />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Property Name</TableCell>
                <TableCell>Property Type</TableCell>
                <TableCell>Multiple Values?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.properties.map(p => (
                <PropertyForm
                  key={p.id}
                  onPropertyChange={this.handlePropertyChange.bind(this)}
                  onPropertyDelete={this.handleDeleteProperty.bind(this)}
                  onPropertyAdd={this.handleAddNewProperty.bind(this)}
                  onTypeAdded={this.onTypeAdded.bind(this)}
                  property={p}
                  types={typeList}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }

  onTypeAdded(type, nextProperty) {
    this.handlePropertyChange(nextProperty)
    this.props.onNewTypeAdded(type)
  }

  handleSave() {
    this.props.onTypeChange({ name: this.state.typeName, properties: this.state.properties })
  }

  handleDeleteProperty(property) {
    this.setState({
      properties: this.state.properties.filter(p => p.id !== property.id)
    })
  }

  handleTypeNameChange(value) {
    this.setState({ typeName: value })
  }

  handleAddNewProperty(afterProperty) {
    const properties = this.state.properties
    const index = properties.findIndex(p => p.id == afterProperty.id)

    this.setState({
      properties: [...properties.slice(0, index), this.createNewProperty(), ...properties.slice(index)]
    })
  }

  handlePropertyChange(property) {
    this.setState({ properties: this.state.properties.map(p => (p.id === property.id ? property : p)) })
  }

  createNewProperty() {
    return {
      id: shortid.generate(),
      name: "",
      type: "text",
      multiple: false
    }
  }
}

export default withStyles(styles)(NewTypeForm)
