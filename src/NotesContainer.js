import React from "react"
import { Component } from "react"
import { Editor, EditorState, ContentState } from "draft-js"
import { withStyles } from "material-ui/styles"
import IconButton from "material-ui/IconButton"
import FormatBoldIcon from "material-ui-icons/FormatBold"
import FormatItalicIcon from "material-ui-icons/FormatItalic"

// format list bulleted
// format list numbered
// format underlined
// format quote
// format size drop down

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

class NotesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { editorState: EditorState.createWithContent(ContentState.createFromText(props.value)) }
    this.onChange = editorState => {
      console.log(editorState.getCurrentContent().getPlainText())
      this.setState({ editorState })
    }
    this.setDomEditorRef = ref => (this.domEditor = ref)
  }
  render() {
    const { classes } = this.props
    return <Editor editorState={this.state.editorState} onChange={this.onChange} ref={this.setDomEditorRef} />
  }
  componentDidMount() {
    this.domEditor.focus()
  }
}

export default withStyles(styles)(NotesContainer)
