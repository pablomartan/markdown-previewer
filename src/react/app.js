import React from 'react';
import { Editor } from './editor.js';
import { Preview } from './preview.js';

export class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id="app">
        <Editor id="editor" input={this.props.input} handler={this.props.inputHandler}/>
        <Preview id="preview" text={this.props.parsed} />
      </div>
    )
  }
};
