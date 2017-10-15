import React from "react"
import { Component } from "react"
import { Editor, EditorState, ContentState } from "draft-js"
import TextField from "material-ui/TextField"

import editorStyles from "./editorStyles.css"

class NotesEditor extends Component {
  constructor(props) {
    super(props)
    this.state = this.getStateFromProps(props)
  }

  getStateFromProps = props => {
    return {
      ...props.thing,
      editorState: props.thing.value
        ? EditorState.createWithContent(ContentState.createFromText(props.thing.value))
        : EditorState.createEmpty()
    }
  }

  onChange = editorState => {
    this.setState({ editorState })
    const value = editorState.getCurrentContent().getPlainText()
    const text = value.trim()
    const name = text ? (text.split(/\r?\n/)[0] || "").substring(0, 24) : "untitled"
    this.props.onChange(Object.assign({ ...this.props.thing }, { name, value }))
  }

  focus = () => {
    this.editor.focus()
  }

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          ref={el => {
            this.editor = el
          }}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    )
  }

  componentDidMount() {
    this.focus()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.thing.id !== this.props.thing.id) {
      this.setState(this.getStateFromProps(nextProps))
    }
  }
}

export default NotesEditor
