import React from 'react';

export class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <textarea id={this.props.id} className="col-7 mb-3" value={this.props.input}
          onChange={this.props.handler} style={{height: 130 + 'px'}}/>
    )
  }
}
