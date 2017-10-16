import { ADD_THING, DELETE_THING, UPDATE_THING, SHOW_SAVE_LOADER, HIDE_SAVE_LOADER } from "../actions"
import { combineReducers } from "redux"
import { routerReducer as router } from "react-router-redux"

const things = (state = [], action) => {
  switch (action.type) {
    case ADD_THING:
      return [...state, action.payload]
      break
    case DELETE_THING:
      return state.filter(thing => thing.id !== action.payload.id)
      break

    case UPDATE_THING:
      return state.map(thing => {
        if (thing.id === action.payload.id) {
          return action.payload
        }
        return thing
      })
      break
    default:
      return state
  }
}

const loaders = (state = { save: false }, action) => {
  switch (action.type) {
    case SHOW_SAVE_LOADER:
      return { save: true }
      break
    case HIDE_SAVE_LOADER:
      return { save: false }
      break
  }
}

export default combineReducers({ things, router })
