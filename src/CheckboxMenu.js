import React from "react"
import Button from "material-ui/Button"
import Menu, { MenuItem } from "material-ui/Menu"
import List, { ListItemText } from "material-ui/List"
import Checkbox from "material-ui/Checkbox"
import IconButton from "material-ui/IconButton"
export default class CheckboxMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose = m => {
    this.setState({ open: false })
  }

  render() {
    const { text, menuItems, onChange } = this.props
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
            <MenuItem key={m.id} component={List}>
              <Checkbox defaultChecked={m.checked} tabIndex={-1} onChange={e => onChange(m.id, e.target.checked)} />
              <ListItemText primary={m.text} />
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}
