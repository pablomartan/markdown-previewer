import React from 'react';

export class Preview extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div id={this.props.id} className="border overflow-auto"
        dangerouslySetInnerHTML={{__html: this.props.text}} />
    )
  }
}
