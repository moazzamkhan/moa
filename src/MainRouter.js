import React, { Component } from "react"
import MainLayout from "./MainLayout"
import { connect } from "react-redux"
import Button from "material-ui/Button"

import { Route, Redirect, Link } from "react-router-dom"

import { ConnectedRouter as Router } from "react-router-redux"

import { settingsStore } from "./store"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const CreateNewLayout = ({ match }) => {
  if (settingsStore.getData().location) {
    return <Redirect to={"/things/Note"} />
  } else {
    return <Redirect to={"/welcome"} />
  }
}
const MainRouter = ({ history }) => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={CreateNewLayout} exact />
        <Route path="/welcome" component={WelcomePage} exact />
        <Route path="/settings" component={CreateNewLayout} exact />
        <Route path="/things/:type/:id?" component={MainLayout} exact />
      </div>
    </Router>
  )
}

export default MainRouter
