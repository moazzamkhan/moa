// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { Provider } from "react-redux"

import { createStore } from "redux"

import thingsApp from "./reducers"
import LocalThingsStore from "./LocalThingsStore"

let store = createStore(thingsApp, LocalThingsStore.getData())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

store.subscribe(() => {
  console.log(arguments, "yo")
})
