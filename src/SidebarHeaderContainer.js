import React from "react"
import { Component } from "react"
import List, { ListItem, ListItemText } from "material-ui/List"
import { Link } from "react-router-dom"
import Button from "material-ui/Button"
import { connect } from "react-redux"
import { withStyles } from "material-ui/styles"
import { FormGroup, FormControlLabel } from "material-ui/Form"
import Checkbox from "material-ui/Checkbox"

const styles = theme => ({
  drawerHeader: theme.mixins.toolbar
})

const handleChange = name => (event, checked) => {
  // this.setState({ [name]: checked });
}

const SidebarHeader = props => {
  const { things, classes } = props
  return (
    <div
      className={classes.drawerHeader}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox defaultChecked={false} onChange={handleChange("checkedA")} value="checkedA" />}
          label="Types"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked={true} onChange={handleChange("checkedA")} value="checkedA" />}
          label="Things"
        />
      </FormGroup>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    things: state.things.map(t => {
      return Object.assign({ ...t }, { url: "/things/" + t.id })
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const SidebarHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(SidebarHeader)

export default withStyles(styles)(SidebarHeaderContainer)
