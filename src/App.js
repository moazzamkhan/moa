import "rxjs"

import React, { Component } from "react"
import ReactDOM from "react-dom"

import MainRouter from "./MainRouter"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"

import { createEpicMiddleware } from "redux-observable"
import epics from "./epics"

import createHistory from "history/createHashHistory"

import { routerMiddleware, push } from "react-router-redux"

import thingsApp from "./reducers"
import PersistentStore from "./store"

const history = createHistory()

const store = createStore(thingsApp, PersistentStore.getData(), applyMiddleware(createEpicMiddleware(epics), routerMiddleware(history)))

ReactDOM.render(
  <Provider store={store}>
    <MainRouter history={history} />
  </Provider>,
  document.getElementById("root")
)

store.subscribe(() => {
  // console.log(store.getState().things)
  PersistentStore.setData(store.getState())
})
