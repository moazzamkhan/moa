import React from "react"
import { Component } from "react"
import List, { ListItem, ListItemText } from "material-ui/List"
import { Link } from "react-router-dom"
import moment from "moment"
import { connect } from "react-redux"

const Sidebar = props => {
  const { things } = props
  return (
    <List>
      {things.map(t => (
        <ListItem key={t.id} component={Link} to={t.url}>
          <ListItemText primary={t.name} secondary={moment(t.lastModified).calendar()} />
        </ListItem>
      ))}
    </List>
  )
}

const mapStateToProps = state => {
  return {
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

export default SidebarContainer
