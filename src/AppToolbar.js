import React, { Component } from "react"
import PropTypes from "prop-types"
import { withStyles } from "material-ui/styles"
import Toolbar from "material-ui/Toolbar"
import TextField from "material-ui/TextField"
import Input from "material-ui/Input"
import { connect } from "react-redux"
import MoreVertIcon from "material-ui-icons/MoreVert"
import IconButton from "material-ui/IconButton"
import SearchIcon from "material-ui-icons/Search"
import CloseIcon from "material-ui-icons/Close"
import { CircularProgress } from 'material-ui/Progress';

export default class AppToolbar extends Component {
  render() {
    const { classes, title } = this.props
    return (
      <Toolbar>
        <div
          style={{
            flex: 1,
            display: "flex",
            borderRadius: 3,
            backgroundColor: "#536DFE"
          }}
        >
          <SearchIcon style={{ margin: 12, marginRight: 0 }} />
          <Input
            fullWidth
            placeholder="Search"
            inputProps={{
              "aria-label": "Search"
            }}
            style={{
              margin: 8,
              color: "#ffffff"
            }}
            margin="normal"
            onChange={e => console.log(e.target.value)}
            disableUnderline
          />
          <CloseIcon style={{ margin: 12, marginLeft: 0 }} />          
        </div>
        <div
          style={{
            width: "50%"
          }}
        />
      </Toolbar>
    )
  }
}

// <CircularProgress color="accent" />        
// <IconButton color="contrast" aria-label={"New Note"} onClick={() => console.log("you")}>
//   <MoreVertIcon />
// </IconButton>

