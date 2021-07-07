import React from "react";
import { createStore, applyMiddleware, combineReducers } from "redux";
import UserReducer from "./reduxSaga/reducer/UserReducer";
import PostReducer from "./reduxSaga/reducer/PostReducer";

import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./reduxSaga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  users: UserReducer,
  posts: PostReducer,
});

const middleware = [sagaMiddleware];

let Store = createStore(rootReducer, applyMiddleware(...middleware));

// run the watcher function

sagaMiddleware.run(watcherSaga);

export default Store;
