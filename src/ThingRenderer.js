import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import TextRenderer from "./types/TextRenderer"
import NotesEditor from "./notes-editor/NotesEditor"

const ThingRenderer = ({ thing }) => {  
  switch (thing.type) {
    case "Note":
      return <NotesEditor thing={thing} />
    default:
      return <TextRenderer thing={thing} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps
  return {
    thing: state.things.filter(t => t.id === match.params.id)[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThingRenderer))
