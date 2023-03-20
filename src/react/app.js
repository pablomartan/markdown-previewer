import React from 'react';
import { Editor } from './editor.js';
import { Preview } from './preview.js';

export class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="app" className="row justify-content-center p-3 w-75">
        <Editor id="editor" input={this.props.input} handler={this.props.inputHandler}/>
        <Preview id="preview" text={this.props.parsed} />
      </div>
    )
  }
};
