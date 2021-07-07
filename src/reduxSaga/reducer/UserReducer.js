import types from "../actions/types";
const initalState = {
  user: undefined,
};

export default function authReducer(state = initalState, action) {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return {
        ...state,
      };
  }
}
