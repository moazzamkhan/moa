import React from "react"
import { Component } from "react"
import NewTypeForm from "./NewTypeForm"

const type = {
  name: "Type Name",
  properties: [
    {
      id: "p0",
      name: "age",
      type: "number",
      multiple: false
    },
    {
      id: "p1",
      name: "gender",
      type: "boolean",
      multiple: false
    }
  ]
}
const typeList = [
  { id: "type0", name: "text" },
  { id: "type1", name: "date" },
  { id: "type2", name: "boolean" },
  { id: "type3", name: "number" }
]

export default class NewTypeFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      type: type,
      typeList: typeList
    }
  }
  render() {
    return (
      <NewTypeForm
        type={this.state.type}
        typeList={this.state.typeList}
        onTypeChange={this.onTypeChange.bind(this)}
        onNewTypeAdded={this.onNewTypeAdded.bind(this)}
      />
    )
  }

  onTypeChange(type) {
    console.log(type)
    this.setState({
      type: { ...type }
    })
  }

  onNewTypeAdded(type) {
    this.setState({
      typeList: [type, ...this.state.typeList]
    })
  }
}
