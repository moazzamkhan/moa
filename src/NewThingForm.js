import React from "react"
import { Component } from "react"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import Paper from "material-ui/Paper"
import { withStyles } from "material-ui/styles"
import { connect } from "react-redux"
import * as shortid from "shortid"
import { withRouter } from "react-router-dom"
import { addThing } from "./actions"

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  button: {
    margin: theme.spacing.unit
  }
})

class NewThingForm extends Component {
  render() {
    const { classes, onThingAdd } = this.props
    return (
      <Paper className={classes.root} elevation={4}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={e => {
            const fd = new FormData(e.target)
            onThingAdd(createThing(fd.get("name"), fd.get("value")))
            e.preventDefault()
          }}
        >
          <TextField label="Name" fullWidth margin="normal" name="name" />
          <TextField label="Value" multiline fullWidth margin="normal" name="value" />
          <div style={{ textAlign: "right" }}>
            <Button raised type="submit" color="primary" className={classes.button}>
              Add
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

const createThing = (name, value) => {
  const dateString = new Date().toJSON()
  return {
    name,
    value,
    id: shortid.generate(),
    createdOn: dateString,
    lastModifiedOn: dateString
  }
}
const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps
  return {
    thing: state.things.filter(t => t.id === match.params.id)[0]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onThingAdd: t => dispatch(addThing(t))
  }
}

// onThingAdd={this.onThingAdd.bind(this)}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewThingForm)))
