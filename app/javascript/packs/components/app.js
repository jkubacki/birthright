import React from 'react'
import Board from './board'
import Panel from './panel'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <div>
        <Panel clicked={this.props.panel.clicked} />
        <Board />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  panel: state.panel
});

export default connect(mapStateToProps)(App);
