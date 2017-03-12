import React from 'react'
import App from './app'
import { Provider } from 'react-redux';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    )
  }
}
