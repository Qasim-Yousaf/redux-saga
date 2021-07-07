// here we list all watcher functions
// here import handler, type of action dispatch & takeLatest
import { takeLatest, all } from "redux-saga/effects";
import GET_USER from "./actions/types";
import { handleGetUser } from "./handler/index";
import { handleGetPost } from "./handler/index2";

export function* watcherSagaForUser() {
  yield takeLatest("GET_USER", handleGetUser);
}
export function* watcherSagaForPost() {
  yield takeLatest("GET_POST", handleGetPost);
}

// watcher function

export function* watcherSaga() {
  yield all([watcherSagaForUser(), watcherSagaForPost()]);
}
