import types from "./types";

export const setUser = (userObj) => {
  return {
    type: types.SET_USER,
    user: userObj,
  };
};

export const getUser = () => {
  return {
    type: types.GET_USER,
  };
};

export const getPost = () => {
  return {
    type: types.GET_POST,
  };
};

export const setPost = (postObj) => {
  return {
    type: types.SET_POST,
    posts: postObj,
  };
};
