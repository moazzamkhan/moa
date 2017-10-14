import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "material-ui/styles"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import MoreVertIcon from "material-ui-icons/MoreVert"
import IconButton from "material-ui/IconButton"

export default class AppToolbar extends Component {
  render() {
    const { classes, title } = this.props
    return (
      <Toolbar style={{ minHeight: 48 }}>
        <Typography
          type="title"
          color="inherit"
          style={{
            flex: 1
          }}
        >
          {title}
        </Typography>
        <IconButton color="contrast" aria-label={"New Note"} onClick={() => console.log("you")}>
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    )
  }
}

// export default withStyles(styles)(AppToobar)
// contacts
// class