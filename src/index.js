import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//added
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducer";

function loadState() {
  const serializedState = localStorage.getItem("state");
  if (!serializedState) {
    return undefined;
  }
  return JSON.parse(serializedState);
}

function saveState(state) {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
}

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
