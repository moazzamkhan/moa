import React from "react"
import { Component } from "react"
import { EditorState, ContentState } from "draft-js"
import Editor from "draft-js-plugins-editor"

import createMentionPlugin, { defaultSuggestionsFilter } from "draft-js-mention-plugin"
import createLinkifyPlugin from "draft-js-linkify-plugin"
import createEmojiPlugin from "draft-js-emoji-plugin"

import editorStyles from "./editorStyles.css"
import mentions from "./mentions"

import "draft-js-mention-plugin/lib/plugin.css"
import "draft-js-linkify-plugin/lib/plugin.css"
import "draft-js-emoji-plugin/lib/plugin.css"

class NotesEditor extends Component {
  constructor(props) {
    super(props)

    this.mentionPlugin = createMentionPlugin()
    this.linkifyPlugin = createLinkifyPlugin()
    this.emojiPlugin = createEmojiPlugin()
  }

  // state = { editorState: EditorState.createWithContent(ContentState.createFromText(this.props.value || "")) }
  state = {
    editorState: EditorState.createEmpty(),
    suggestions: mentions
  }

  onChange = editorState => {
    // console.log(editorState.getCurrentContent().getPlainText())
    this.setState({ editorState })
  }

  onAddMention = () => {
    // get the mention object selected
  }

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions)
    })
  }

  render() {
    const { EmojiSuggestions, EmojiSelect } = this.emojiPlugin
    const { MentionSuggestions } = this.mentionPlugin
    const plugins = [this.mentionPlugin, this.linkifyPlugin, this.emojiPlugin]
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor ref={el => (this.editor = el)} editorState={this.state.editorState} onChange={this.onChange} plugins={plugins} />
        <MentionSuggestions onSearchChange={this.onSearchChange} suggestions={this.state.suggestions} onAddMention={this.onAddMention} />
        <EmojiSuggestions />
        <EmojiSelect />
      </div>
    )
  }

  componentDidMount() {
    // this.editor.focus()
  }
}

export default NotesEditor
