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
        <div id="left-column" className="col col-lg-5 d-flex flex-column mb-2">
          <div id="titleWrapper">
            <h1 id="app-title">Markdown Previer</h1>
            <p>
              Write your <a href="https://www.markdownguide.org">markdown</a> into
              the text area with title Editor and you will see it parsed in
              the Preview
            </p>
          </div>
          <div id="editorWrapper">
            <div id="editor-title" className="toolbar"><p className="p-1 m-auto">Editor</p></div>
            <Editor id="editor" input={this.props.input} handler={this.props.inputHandler}/>
          </div>
        </div>
        <div id="previewWrapper" className="col col-lg-7 mb-3">
          <div id="preview-title" className="toolbar"><p className="p-1 m-auto">Preview</p></div>
          <Preview id="preview" text={this.props.parsed} />
        </div>
      </div>
    )
  }
};
