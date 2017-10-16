import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import { withStyles } from "material-ui/styles"
import AddCircleOutlineIcon from "material-ui-icons/AddCircleOutline"
import HomeIcon from "material-ui-icons/Home"
import { addThing, deleteThing } from "./actions"
import SimpleMenuWithRoutes from "./menus/SimpleMenuWithRoutes"
import IconButton from "material-ui/IconButton"
import ThingFactory from "./ThingFactory"
import { Link } from "react-router-dom"
import DeleteIcon from "material-ui-icons/Delete"

const menuItems = [
  { id: "new-type", text: "+Type", to: "/Type" },
  { id: "new-thing", text: "+Thing", to: "/Thing" },
  { id: "new-note", text: "+Note", to: "/Note" },
  { id: "new-contact", text: "+Contact", to: "/Contact" }
]

const styles = theme => ({
  drawerHeader: theme.mixins.toolbar
})

const SidebarHeader = ({ type, id, thing, classes, addThing, deleteThing }) => (
  <div
    className={classes.drawerHeader}
    style={{
      display: "flex",
      alignItems: "center"
    }}
  >
    <Link to="/">
      <IconButton color="primary">
        <HomeIcon />
      </IconButton>
    </Link>
    <div style={{ flex: 1 }} />
    {id && (
      <IconButton aria-label={"New " + type} color="primary" onClick={() => deleteThing(thing)}>
        <DeleteIcon />
      </IconButton>
    )}
    <IconButton aria-label={"New " + type} color="primary" onClick={() => addThing(ThingFactory.create(type, { name: "untitled" }))}>
      <AddCircleOutlineIcon />
    </IconButton>
  </div>
)

const mapStateToProps = (state, { things, id }) => {
  return {
    thing: things.filter(t => t.id === id)[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addThing: t => dispatch(addThing(t)),
    deleteThing: t => dispatch(deleteThing(t))
  }
}

const SidebarHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarHeader)

export default withStyles(styles)(SidebarHeaderContainer)

// <SimpleMenuWithRoutes text={type} menuItems={menuItems} style={{ marginLeft: 10 }} />
