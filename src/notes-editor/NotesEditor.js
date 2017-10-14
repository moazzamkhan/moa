import React from "react"
import { Component } from "react"
import { EditorState, ContentState } from "draft-js"
import Editor from "draft-js-plugins-editor"

import createMentionPlugin, { defaultSuggestionsFilter } from "draft-js-mention-plugin"
import createLinkifyPlugin from "draft-js-linkify-plugin"
import createEmojiPlugin from "draft-js-emoji-plugin"
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin"
import createToolbarPlugin from "draft-js-static-toolbar-plugin"

import editorStyles from "./editorStyles.css"
import mentions from "../init-data/mentions"

import "draft-js-mention-plugin/lib/plugin.css"
import "draft-js-linkify-plugin/lib/plugin.css"
import "draft-js-emoji-plugin/lib/plugin.css"
import "draft-js-inline-toolbar-plugin/lib/plugin.css"

class NotesEditor extends Component {
  constructor(props) {
    super(props)

    this.mentionPlugin = createMentionPlugin()
    this.linkifyPlugin = createLinkifyPlugin()
    this.inlineToolbarPlugin = createInlineToolbarPlugin()
    this.toolbarPlugin  = createToolbarPlugin();
    
    this.emojiPlugin = createEmojiPlugin({
      imageType: "png",
      imagePath: "./assets/EmojiOne_3.1.1_32x32_png/"
    })
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
    const { InlineToolbar } = this.inlineToolbarPlugin
    const { Toolbar } = this.toolbarPlugin;    

    const plugins = [this.mentionPlugin, this.linkifyPlugin, this.emojiPlugin, this.inlineToolbarPlugin]
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          ref={el => {
            this.editor = el
          }}
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
        />
        <MentionSuggestions onSearchChange={this.onSearchChange} suggestions={this.state.suggestions} onAddMention={this.onAddMention} />
        <EmojiSuggestions />
        <InlineToolbar />
      </div>
    )
  }

  focus = () => {
    this.editor.focus()
  }

  componentDidMount() {
    // this.focus()
  }
}
// <EmojiSelect />

export default NotesEditor
