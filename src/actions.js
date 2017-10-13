export const ADD_THING = "ADD_THING"
export const UPDATE_THING = "UPDATE_THING"
export const DELETE_THING = "DELETE_THING"

export const TYPE_FILTER = "TYPE_FILTER"
export const THING_FILTER = "THING_FILTER"
export const NOTE_FILTER = "NOTE_FILTER"

export const ADD_FILTER = "ADD_FILTER"
export const REMOVE_FILTER = "REMOVE_FILTER"

export function addThing(thing) {
  return { type: ADD_THING, payload: thing }
}

export function updateThing(thing) {
  return { type: UPDATE_THING, payload: thing }
}

export function deleteThing(id) {
  return { type: DELETE_THING, payload: id }
}

// Save

export const SAVE_EVERYTHING = "SAVE_EVERYTHING"

export function saveEverything(everything) {
  return { type: SAVE_EVERYTHING, payload: everything }
}

export function addFilter(filter) {
  return { type: ADD_FILTER, payload: filter }
}

export function removeFilter(filter) {
  return { type: REMOVE_FILTER, payload: filter }
}
