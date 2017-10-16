import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import TextRenderer from "./types/TextRenderer"
import NotesEditor from "./notes-editor/NotesEditor"

const ThingRenderer = ({ thing, onChange }) => {  
  switch (thing.type) {
    case "Note":
      return <NotesEditor thing={thing} onChange={onChange} />
    default:
      return <TextRenderer thing={thing} onChange={onChange} />
  }
}

const mapStateToProps = ({ things }, { match }) => {
  const { type, id } = match.params
  return {
    thing: things.filter(t => t.id === id)[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThingRenderer))
