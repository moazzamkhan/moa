// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from "react"
import ReactDOM from "react-dom"

import App from "./App.js"
import { Provider } from "react-redux"

import { createStore } from "redux"

import thingsApp, { defaultFilterState } from "./reducers"
import PersistentStore from "./store"
let store = createStore(thingsApp, Object.assign({ filters: defaultFilterState }, PersistentStore.getData()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

store.subscribe(() => {
  console.log(store.getState(), "Saved...")
  PersistentStore.setData(store.getState())
})
