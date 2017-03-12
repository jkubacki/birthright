import Constants from "../constants"

const initialState = {
  clicked: "not"
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.PANEL_TOGGLE:
      if (state.clicked == "not") {
        return { ...state, clicked: "is" };
      } else {
        return { ...state, clicked: "not" };
      }
    default:
      return state;
  }
}
