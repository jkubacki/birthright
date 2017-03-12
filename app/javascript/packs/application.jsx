import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const node = <Root store={store} />
  ReactDOM.render(
    node,
    document.body.appendChild(document.createElement('div')),
  )
})
