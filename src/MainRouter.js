import React, { Component } from "react"
import MainLayout from "./MainLayout"
import { connect } from "react-redux"
import Button from "material-ui/Button"

import { Route, Redirect, Link } from "react-router-dom"

import { ConnectedRouter as Router } from 'react-router-redux'

// import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const CreateNewLayout = ({ match }) => {
  return (
    <div style={{ width: 600, margin: "100px auto" }}>
      <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-around" }}>
        {["Thing", "Note", "Contact", "Type"].map(text => (
          <Button key={text} raised color="accent" component={Link} to={"/" + text}>
            {"+" + text}
          </Button>
        ))}
      </div>
    </div>
  )
}
const MainRouter = ({history}) => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={CreateNewLayout} exact />
        <Route path="/:type/:id?" component={MainLayout} exact />
      </div>
    </Router>
  )
}

export default MainRouter
