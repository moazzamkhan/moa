import React from "react"
import { Component } from "react"
import EverythingPage from "./EverythingPage"
import Button from "material-ui/Button"
import LocalThingsStore from "./LocalThingsStore"
import SettingsPage from "./SettingsPage"
import MainLayout from "./MainLayout"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      location: LocalThingsStore.getLocation()
    }
  }
  render() {
    console.log(this.state.location )
    const landingPage = this.state.location ? <EverythingPage /> : <SettingsPage onSave={this.onSave.bind(this)} />
    // return <div>{landingPage}</div>
    return <MainLayout />
  }

  onSave(location) {
    LocalThingsStore.setLocation(location)
    this.setState({
      location: location
    })
  }
}
