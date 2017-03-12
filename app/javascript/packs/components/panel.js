import React from 'react'

export default class Panel extends React.Component {

  _toggle() {
    console.log("clicked");
  }

  render() {
    return (
      <div className="Panel" onClick={this._toggle}>
        Panel {this.props.clicked} clicked
      </div>
    );
  }
}
