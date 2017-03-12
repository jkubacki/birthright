import React from 'react'
import Board from './board'
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Board />
      </Provider>
    )
  }
}
