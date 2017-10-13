import { saveEverything } from "./actions"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { withStyles } from "material-ui/styles"
import AppToobar from "./AppToolbar"

const mapStateToProps = ({ things }, { match, location, history }) => {
  const thing = things.filter(t => t.id === match.params.id)[0]
  return {
    title: thing ? thing.name : "Everything"
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppToobar))
