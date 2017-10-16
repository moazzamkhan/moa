import { connect } from "react-redux"
import { withStyles } from "material-ui/styles"
import AppToobar from "./AppToolbar"

const mapStateToProps = ({ things }, { type, id }) => {
  const thing = things.filter(t => t.id === id)[0]  
  return {
    title: thing ? thing.name : type
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppToobar)
