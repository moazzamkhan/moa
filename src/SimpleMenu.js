import React from "react"
import Button from "material-ui/Button"
import Menu, { MenuItem } from "material-ui/Menu"
import IconButton from "material-ui/IconButton"

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose = m => {
    this.setState({ open: false })
    this.props.onSelect(m)
  }

  render() {
    const { text, menuItems } = this.props
    const MenuButtonIcon = this.props.buttonIcon

    return (
      <div>
        <IconButton
          aria-label={text}
          color="primary"
          aria-owns={this.state.open ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuButtonIcon />
        </IconButton>
        <Menu id="simple-menu" anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose}>
          {menuItems.map(m => (
            <MenuItem key={m.id} onClick={() => this.handleRequestClose(m)}>
              {m.text}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
