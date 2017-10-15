export const ADD_THING = "ADD_THING"
export const UPDATE_THING = "UPDATE_THING"
export const DELETE_THING = "DELETE_THING"

export const SHOW_SAVE_LOADER = "SHOW_SAVE_LOADER"
export const HIDE_SAVE_LOADER = "HIDE_SAVE_LOADER"

export function addThing(thing) {
  return { type: ADD_THING, payload: thing }
}

export function updateThing(thing) {
  return { type: UPDATE_THING, payload: Object.assign({ ...thing }, { lastModified: new Date().toJSON() }) }
}

export function deleteThing(id) {
  return { type: DELETE_THING, payload: id }
}

export function showSaveLoader() {
  return { type: SHOW_SAVE_LOADER }
}

export function hideSaveLoader() {
  return { type: HIDE_SAVE_LOADER }
}

export const SAVE_EVERYTHING = "SAVE_EVERYTHING"

export function saveEverything(everything) {
  return { type: SAVE_EVERYTHING, payload: everything }
}
