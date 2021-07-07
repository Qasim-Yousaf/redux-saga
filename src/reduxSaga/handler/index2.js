// make a handle func
import { call, put } from "redux-saga/effects";
import { setPost } from "../actions/action";
import request from "../request/index";

export function* handleGetPost() {
  try {
    let response = yield call(request, "posts");
    let { data } = response;
    yield put(setPost(data));
  } catch (error) {
    console.log(error);
  }
}
