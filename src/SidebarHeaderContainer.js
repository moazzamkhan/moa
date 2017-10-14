import React from "react"
import { Component } from "react"

import { connect } from "react-redux"
import { withStyles } from "material-ui/styles"
import CheckboxMenu from "./CheckboxMenu"
import Button from "material-ui/Button"
import FilterListIcon from "material-ui-icons/FilterList"
import AddCircleOutlineIcon from "material-ui-icons/AddCircleOutline"
import HomeIcon from "material-ui-icons/Home"
import NoteAddIcon from "material-ui-icons/NoteAdd"
import { addFilter, removeFilter, addThing } from "./actions"
import SimpleMenu from "./SimpleMenu"
import NewThingDialog from "./NewThingDialog"
import NewTypeDialog from "./NewTypeDialog"
import IconButton from "material-ui/IconButton"
import ThingFactory from "./ThingFactory"
import { Link } from "react-router-dom"

const newMenuItems = [{ id: "new-type", text: "+Type" }, { id: "new-thing", text: "+Thing" }, , { id: "new-note", text: "+Notes" }]

const styles = theme => ({
  drawerHeader: theme.mixins.toolbar
})

class SidebarHeader extends Component {
  state = {
    typeDialog: false,
    thingDialog: false
  }

  handleMenuSelect = ({ id }) => {
    switch (id) {
      case "new-type":
        this.setState({ typeDialog: true })
        break
      case "new-thing":
        this.setState({ thingDialog: true })
        break
      default:
        this.setState({ thingDialog: false, typeDialog: false })
    }
  }

  handleAddNewThing = t => {
    this.setState({ thingDialog: false, typeDialog: false })
    this.props.addThing(t)
  }

  render() {
    const { things, menuItems, types, classes, onFilterAdd, onFilterRemove } = this.props
    return (
      <div
        className={classes.drawerHeader}
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: 48
        }}
      >
        <IconButton
          aria-label={"New Note"}
          color="primary"
          onClick={() => this.handleAddNewThing(ThingFactory.createNote({ name: "untitled" }))}
        >
          <NoteAddIcon />
        </IconButton>
        <SimpleMenu text={"New"} buttonIcon={AddCircleOutlineIcon} menuItems={newMenuItems} onSelect={this.handleMenuSelect} />
        <NewTypeDialog open={this.state.typeDialog} onNewType={this.handleAddNewThing} types={types} />
        <NewThingDialog open={this.state.thingDialog} onNewThing={this.handleAddNewThing} types={types} />
        <IconButton aria-label={"Home"} color="primary" component={Link} to={"/"}>
          <HomeIcon />
        </IconButton>

        <div
          style={{
            flex: 1
          }}
        />
        <CheckboxMenu
          text={"hello"}
          menuItems={menuItems}
          buttonIcon={FilterListIcon}
          onChange={(f, checked) => (checked ? onFilterAdd(f) : onFilterRemove(f))}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    things: state.things.map(t => {
      return Object.assign({ ...t }, { url: "/things/" + t.id })
    }),
    menuItems: state.filters,
    types: state.things.filter(t => t.type === "type")
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterAdd: f => dispatch(addFilter(f)),
    onFilterRemove: f => dispatch(removeFilter(f)),
    addThing: t => dispatch(addThing(t))
  }
}

const SidebarHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarHeader)

export default withStyles(styles)(SidebarHeaderContainer)
