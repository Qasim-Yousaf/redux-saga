import React from "react";
import { Provider } from "react-redux";
import Store from "./Store.js";
import Index from "./reduxSaga/view/index";

function Main() {
  return (
      <Provider store={Store}>
        <Index />
      </Provider>
  );
}

export default Main;
