import { TYPE_FILTER, THING_FILTER, NOTE_FILTER, ADD_FILTER, REMOVE_FILTER, ADD_THING, DELETE_THING, UPDATE_THING } from "./actions"
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

export const defaultFilterState = [
  { text: "Type", id: TYPE_FILTER, checked: true },
  { text: "Thing", id: THING_FILTER, checked: true },
  { text: "Note", id: "NOTE_FILTER", checked: true }
]

const filters = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      return state.map(f => (f.id === action.payload ? Object.assign({}, f, { checked: true }) : f))
      break
    case REMOVE_FILTER:
      return state.map(f => (f.id === action.payload ? Object.assign({}, f, { checked: false }) : f))
      break
    default:
      return state
  }
}

export default combineReducers({ things, filters })
