import React from "react"
import { Component } from "react"
import List, { ListItem, ListItemText } from "material-ui/List"
import { Link } from "react-router-dom"
import moment from "moment"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { withStyles } from "material-ui/styles"
const styles = {
  selected: {
    backgroundColor: "#8C9EFF"
  },
  notSelected: {}
}

const Sidebar = props => {
  const { things, location, classes } = props

  return (
    <List>
      {things.map(t => (
        <ListItem
          button
          key={t.id}
          component={Link}
          to={t.url}
          style={styles}
          className={location.pathname === t.url ? classes.selected : classes.notSelected}
        >
          <ListItemText primary={t.name} secondary={moment(t.lastModified).calendar()} />
        </ListItem>
      ))}
    </List>
  )
}

const mapStateToProps = (state, { location }) => {
  console.log(location)
  return {
    location,
    things: state.things
      .map(t => {
        return Object.assign({ ...t }, { url: "/things/" + t.id })
      })
      .filter(t => t.type === "Note")
      .sort((a, b) => new Date(a.lastModified).getTime() < new Date(b.lastModified).getTime())
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default withRouter(withStyles(styles)(SidebarContainer))
