export const ADD_THING = "ADD_THING"
export const UPDATE_THING = "UPDATE_THING"
export const DELETE_THING = "DELETE_THING"

export const NO_FILTER = "NO_FILTER"

export function addThing(thing) {
  return { type: ADD_THING, payload: thing }
}

export function updateThing(thing) {
  return { type: UPDATE_THING, payload: thing }
}

export function deleteThing(id) {
  return { type: DELETE_THING, payload: id }
}
