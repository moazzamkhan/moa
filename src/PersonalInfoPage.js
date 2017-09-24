import React from "react"
import { Component } from "react"
import PropertyList from "./PropertyList"
import Button from "material-ui/Button"
import LocalStore from "./LocalStore"
import AppHeader from "./AppHeader"

export default class PersonalInfoPage extends Component {
  constructor() {
    super()
    this.state = LocalStore.getData()
  }

  componentDidMount() {
    // this.setState(LocalStore.getData())
  }

  render() {
    return (
      <div>
        <AppHeader onSave={this.onSave.bind(this)} />
        <PropertyList
          {...this.state}
          onChange={this.onPropertyChange.bind(this)}
          onTitleChange={this.onTitleChange.bind(this)}
          onPropertyAdd={this.onPropertyAdd.bind(this)}
        />
      </div>
    )
  }
  onPropertyAdd(p) {
    p.id = this.state.properties.length
    this.setState({
      properties: [...this.state.properties, p]
    })
  }
  onPropertyChange(property) {
    this.setState({
      properties: this.state.properties.map(p => {
        if (p.id === property.id) {
          return property
        }
        return p
      })
    })
  }

  onTitleChange(title) {
    this.setState({
      title: title
    })
  }

  onSave() {
    LocalStore.setData(this.state)
  }
}
