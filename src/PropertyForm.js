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
import { FormControl, FormHelperText } from "material-ui/Form"
import shortid from "shortid"

const styles = theme => ({
  iconButtonStyle: {
    width: "auto",
    height: "auto"
  }
})

class PropertyForm extends Component {
  state = {
    dialogOpen: false
  }

  handlePropertyChange = change => {
    this.props.onPropertyChange(Object.assign({ ...this.props.property }, change))
  }
  
  render() {
    const { property, types, classes, onPropertyDelete, onPropertyAdd } = this.props
    return (
      <TableRow key={property.id}>
        <TableCell style={{ padding: 24, width: 50 }}>
          <IconButton color="accent" aria-label="add" className={classes.iconButtonStyle} onClick={() => onPropertyDelete(property)}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add" className={classes.iconButtonStyle} onClick={() => onPropertyAdd(property)}>
            <AddCircleOutlineIcon />
          </IconButton>
        </TableCell>
        <TableCell>
          <TextField
            fullWidth
            label=""
            placeholder=""
            margin="normal"
            defaultValue={property.name}
            name="name"
            onChange={e => this.handlePropertyChange({ name: e.target.value }, e.target)}
          />
        </TableCell>
        <TableCell>
          <Select
            ref={el => (this.typeSelectEl = el)}
            name="type"
            native
            style={{ width: "70%" }}
            defaultValue={property.type}
            onChange={e => this.handlePropertyChange({ type: e.target.value }, e.target)}
          >
            {types.map(option => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </Select>
        </TableCell>
        <TableCell>
          <Switch
            defaultChecked={property.multiple}
            name="multiple"
            onChange={e => this.handlePropertyChange({ multiple: e.target.checked }, e.target)}
          />
        </TableCell>
      </TableRow>
    )
  }
}

export default withStyles(styles)(PropertyForm)
