import React from 'react'
import Actions from '../actions/panel'

export default class Panel extends React.Component {
  _toggle() {
    let dispatch = this.props.dispatch;
    Actions.toggle(dispatch);
  }

  render() {
    return (
      <div className="Panel" onClick={::this._toggle}>
        Panel {this.props.clicked} clicked
      </div>
    );
  }
}
