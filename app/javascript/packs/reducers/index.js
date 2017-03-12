import { combineReducers } from 'redux';
import panelReducer from './panel'

export default combineReducers({
  panel: panelReducer
});
