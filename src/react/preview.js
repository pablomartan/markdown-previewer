import React from 'react';

export class Preview extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div id={this.props.id} className="col-10 border h-75 overflow-auto" dangerouslySetInnerHTML={{__html: this.props.text}} />
    )
  }
}
