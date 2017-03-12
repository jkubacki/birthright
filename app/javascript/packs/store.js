import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducer from './reducers/reducer';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore() {
  return createStore(reducer, applyMiddleware(loggerMiddleware));
}
