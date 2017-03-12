import React from 'react'
import Actions from '../actions/panel'

export default class Panel extends React.Component {

  constructor(props) {
    super(props);
    this._toggle = this._toggle.bind(this);
  }

  _toggle() {
    let dispatch = this.props.dispatch;
    Actions.toggle(dispatch);
  }

  render() {
    return (
      <div className="Panel" onClick={this._toggle}>
        Panel {this.props.clicked} clicked
      </div>
    );
  }
}
