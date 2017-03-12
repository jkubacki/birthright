import React from 'react'

export default class Panel extends React.Component {

  render() {
    return (
      <div className="Panel">
        Panel {this.props.clicked} clicked
      </div>
    );
  }
}
