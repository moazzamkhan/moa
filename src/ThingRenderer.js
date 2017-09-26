import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import TextRenderer from "./types/TextRenderer"

const dummyText = `Hello, How are you
this is what i want haha ho ho
you are good my friend
i am a wolf of wall street
i am awold of wall street`

const ThingRenderer = ({ thing }) => <TextRenderer thing={thing} />

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

// <Route exact path="/" component={() => <EverythingPage {...this.state} />} />
// <Route path="/new" component={() => <NewThingForm onThingAdd={this.onThingAdd.bind(this)} />} />
// <Route path="/notes" component={() => <NotesContainer value={dummyText} />} />
