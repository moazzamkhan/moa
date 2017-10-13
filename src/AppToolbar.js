import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "material-ui/styles"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

export default class AppToolbar extends Component {
  render() {
    const { classes, title } = this.props
    return (
      <Toolbar>
        <Typography
          type="title"
          color="inherit"
          style={{
            flex: 1,
            color: "rgba(0, 0, 0, 0.87)"
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    )
  }
}

// export default withStyles(styles)(AppToobar)
