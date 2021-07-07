import types from "../actions/types";

let initialState = {
  posts: undefined,
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_POST:
      return {
        ...state,
        posts: action.posts,
      };
      break;

    default:
      return {
        ...state,
      };
      break;
  }
}
