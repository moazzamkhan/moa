import React from "react"
import { Component } from "react"
import List, { ListItem, ListItemText } from "material-ui/List"
import { Link } from "react-router-dom"
import Avatar from "material-ui/Avatar"
import FolderIcon from "material-ui-icons/Folder"
import moment from "moment"
import { connect } from 'react-redux'


const Sidebar = props => {
  const { things } = props
  return (
    <List>
      {things.map(t => (
        <ListItem key={t.id} component={Link} to={"/things/" + t.id}>
          <Avatar>
            <FolderIcon />
          </Avatar>
          <ListItemText primary={t.name} secondary={moment(t.lastModifiedOn).calendar()} />
        </ListItem>
      ))}
    </List>
  )
}

const mapStateToProps = state => {
  return {
    things: state.things
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer
