import { NO_FILTER, ADD_THING, DELETE_THING, UPDATE_THING } from "./actions"
import { combineReducers } from "redux"

const things = (state = [], action) => {
  switch (action.type) {
    case ADD_THING:
      return [...state, action.payload]
      break
    case DELETE_THING:
      return state.filter(thing => thing.id !== action.payload)
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

const filter = (state = NO_FILTER, action) => {
  return state
}
export default combineReducers({things, filter})
