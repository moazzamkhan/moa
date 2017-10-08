import React from "react"
import { Component } from "react"
import Store from "./store"
import SettingsPage from "./SettingsPage"
// import MainLayout from "./MainLayout"
// import EverythingPage from "./EverythingPage"
import TypesLayout from "./TypesLayout"

export default class App extends Component {
  constructor() {
    super()
    this.state = Store.getConfig()
  }
  render() {
    // const landingPage = this.state.location ? <EverythingPage /> : <SettingsPage onSave={this.onSave.bind(this)} />
    // return <div>{landingPage}</div>
    return <TypesLayout />
    // return <SettingsPage onSave={this.onSave.bind(this)} />
  }

  onSave(location) {
    Store.setConfig(Object.assign({ ...this.state }, { location }))
    this.setState({
      location: location
    })
  }
}

