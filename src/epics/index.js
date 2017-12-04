import { combineEpics } from "redux-observable"
import { ADD_THING, DELETE_THING, UPDATE_THING, SHOW_SAVE_LOADER, HIDE_SAVE_LOADER } from "../actions"

import { push } from "react-router-redux"

const thingAddEpic = action$ => action$.ofType(ADD_THING).map(({ payload }) => push("/" + payload.type + "/" + payload.id))
const thingDeleteEpic = action$ => action$.ofType(DELETE_THING).map(({ payload }) => push("/" + payload.type))

export default combineEpics(thingDeleteEpic)
