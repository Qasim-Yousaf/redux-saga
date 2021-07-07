// make a handle func
import { call, put } from "redux-saga/effects";
import request from "../request/index";
import { setUser } from "../actions/action";

export function* handleGetUser() {
  try {
    // call
    //   yeild is similar to await

    let response = yield call(request, "users");
    let { data } = response;
    // dispatch an action to reducer
    console.log('response is ---- ',data)

    yield put(setUser(data));

    // put
  } catch (error) {
    console.log(error);
  }
}
