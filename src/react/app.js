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
        <Editor id="editor" />
        <Preview id="preview" />
      </div>
    )
  }
};