import Constants from "../constants"
const Actions = {};

Actions.toggle = (dispatch) => {
  dispatch({
    type: Constants.PANEL_TOGGLE
  })
}

export default Actions;
