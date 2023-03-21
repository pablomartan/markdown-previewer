import React from 'react';
import { Editor } from './editor.js';
import { Preview } from './preview.js';

export class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="app" className="row justify-content-center pt-5">
        <div id="editorWrapper" className="col-8 mb-4">
          <div id="editor-title" className="toolbar">Editor</div>
          <Editor id="editor" input={this.props.input} handler={this.props.inputHandler}/>
        </div>
        <div id="previewWrapper" className="col-10">
          <div id="preview-title" className="toolbar">Preview</div>
          <Preview id="preview" text={this.props.parsed} />
        </div>
      </div>
    )
  }
};
