import { combineEpics } from "redux-observable"
import { ADD_THING, DELETE_THING, UPDATE_THING, SHOW_SAVE_LOADER, HIDE_SAVE_LOADER } from "../actions"

import { push } from "react-router-redux"
import PersistentStore from "../store"

const thingAddEpic = action$ => action$.ofType(ADD_THING).map(({ payload }) => push("/" + payload.type + "/" + payload.id))
const thingDeleteEpic = action$ => action$.ofType(DELETE_THING).map(({ payload }) => push("/" + payload.type))

// const saveEpic = action$ =>
//   action$.filter(action => action.type === ADD_THING || action.type === DELETE_THING || action.type === UPDATE_THING).mapTo(action => {
//     PersistentStore.setData(store.getState())
//     return
//   })

//   const saveLoader = action$=> action$.ofType(SAv)

export default combineEpics(thingDeleteEpic)
