import React from "react"
import Menu, { MenuItem } from "material-ui/Menu"
import IconButton from "material-ui/IconButton"
import Button from "material-ui/Button"

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

    const btnProps = {
      "aria-label": text,
      color: "primary",
      "aria-owns": this.state.open ? "simple-menu" : null,
      "aria-haspopup": "true",
      onClick: this.handleClick
    }

    return (
      <div>
        {MenuButtonIcon ? (
          <IconButton {...btnProps}>
            <MenuButtonIcon />
          </IconButton>
        ) : (
          <Button raised {...btnProps}>
            {text}
          </Button>
        )}
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
