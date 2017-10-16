import React from "react"
import Menu, { MenuItem } from "material-ui/Menu"
import IconButton from "material-ui/IconButton"
import Button from "material-ui/Button"
import { Link } from "react-router-dom"

class SimpleMenuWithRoutes extends React.Component {
  state = {
    anchorEl: null,
    open: false
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { text, menuItems, style } = this.props

    const btnProps = {
      "aria-label": text,
      color: "primary",
      "aria-owns": this.state.open ? "simple-menu" : null,
      "aria-haspopup": "true",
      onClick: this.handleClick
    }

    return (
      <div style={style}>
        <Button raised {...btnProps}>
          {text}
        </Button>
        <Menu id="simple-menu" anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose}>
          {menuItems.map(m => (
            <MenuItem key={m.id} component={Link} to={m.to} onClick={this.handleRequestClose}>
              {m.text}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default SimpleMenuWithRoutes
