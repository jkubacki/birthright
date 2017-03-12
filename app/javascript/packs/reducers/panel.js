const initialState = {
  clicked: "not"
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "toggle":
      return state;
    default:
      return state;
  }
}
