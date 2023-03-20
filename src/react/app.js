import React from 'react';
import { Editor } from './editor.js';
import { Preview } from './preview.js';

export class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="app" className="row justify-content-center p-3 w-50">
        <div id="editor-title" className="col-7 border">Editor</div>
        <Editor id="editor" input={this.props.input} handler={this.props.inputHandler}/>
        <div id="preview-title" className="col-9 border">Preview</div>
        <Preview id="preview" text={this.props.parsed} />
      </div>
    )
  }
};
