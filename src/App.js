import React, { Component } from "react"
import ReactDOM from "react-dom"

import MainRouter from "./MainRouter"
import { Provider } from "react-redux"
import { createStore } from "redux"
import thingsApp, { defaultFilterState } from "./reducers"
import PersistentStore from "./store"

let store = createStore(thingsApp, Object.assign({ filters: defaultFilterState }, PersistentStore.getData()))

ReactDOM.render(
  <Provider store={store}>
    <MainRouter />
  </Provider>,
  document.getElementById("root")
)

store.subscribe(() => {
  console.log(store.getState(), "Saved...")
  PersistentStore.setData(store.getState())
})
