import React from "react"
import { Component } from "react"
import Everything from "./Everything"
import Button from "material-ui/Button"
import Store from "./store"
import AppHeader from "./AppHeader"
import NewThingForm from "./NewThingForm"

export default class EverythingPage extends Component {
  render() {
    return <Everything {...this.props} onChange={this.onThingChange.bind(this)} />
  }
  onThingChange(thing) {
    this.setState({
      things: this.state.things.map(t => {
        if (t.id === thing.id) {
          return thing
        }
        return t
      })
    })
  }
}
