import React from 'react';

export class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <textarea id={this.props.id} className="col-8 mb-5 h-25" value={this.props.input} onChange={this.props.handler} />
    )
  }
}
