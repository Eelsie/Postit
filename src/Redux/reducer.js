import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

import type {Reducer} from '../types'

export const boardReducer: Reducer<Array<Board>> = handleActions({
  RECEIVE_BOARDS: (state, {payload}) => payload,
}, [])

export const noteReducer: Reducer<Array<Note>> = handleActions({
  RECEIVE_NOTES: (state, {payload}) => payload,
  REMOVE_NOTE: (state, {payload}) => state.filter((el) => el.id !== payload),
  EDIT_NOTE: (state, {payload}) => [...state, state[payload.index].message = payload.text],
}, [])

export default combineReducers({
  boards: boardReducer,
  notes: noteReducer,
})
