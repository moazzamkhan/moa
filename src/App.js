import React from "react"
import { Component } from "react"
import PersonalInfoPage from "./PersonalInfoPage"
import PropertyList from "./PropertyList"
import Button from "material-ui/Button"
import LocalStore from "./LocalStore"
import SettingsPage from "./SettingsPage"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      location: LocalStore.getLocation()
    }
  }
  render() {
    console.log(this.state.location )
    const landingPage = this.state.location ? <PersonalInfoPage /> : <SettingsPage onSave={this.onSave.bind(this)} />
    return <div>{landingPage}</div>
  }

  onSave(location) {
    LocalStore.setLocation(location)
    this.setState({
      location: location
    })
  }
}
