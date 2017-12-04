import React from "react"
import { Component } from "react"
import List, { ListItem, ListItemText } from "material-ui/List"
import { Link } from "react-router-dom"
import moment from "moment"

import { withStyles } from "material-ui/styles"
const styles = {
  selected: {
    backgroundColor: "#8C9EFF"
  }
}

const Sidebar = props => {
  const { things, type, id, classes } = props
  
  // things.map(t => console.log(t.name))

  return (
    <List>
      {things.map(t => (
        <ListItem
          button
          key={t.id}
          component={Link}
          to={"/things/" + type + "/" + t.id}
          style={styles}
          className={id === t.id ? classes.selected : null}
        >
          <ListItemText primary={t.name} secondary={moment(t.lastModified).calendar()} />
        </ListItem>
      ))}
    </List>
  )
}

export default withStyles(styles)(Sidebar)
