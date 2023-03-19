import React from 'react';

export class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <textarea id={this.props.id} value={this.props.input} />
    )
  }
}
