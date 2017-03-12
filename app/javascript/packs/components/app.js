import React from 'react'
import Board from './board'
import Panel from './panel'
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Panel />
        <Board />
      </div>
    )
  }
}
