import { createStore } from 'redux'
import thingsApp from './reducers'

let store = createStore(thingsApp)

// Log the initial state
console.log(store.getState())

import moment from "moment"
console.log(new Date().toJSON())
console.log(moment(new Date().toJSON()).calendar())

store.subscribe(()=> {
    console.log(arguments)
})