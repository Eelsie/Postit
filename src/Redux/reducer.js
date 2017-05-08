import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

import type {Reducer} from '../types'

export const boardReducer: Reducer<Array<Board>> = handleActions({
  RECEIVE_BOARDS: (state, {payload}) => payload,
  UPDATE_REMOVE_BOARD: (state, {payload}) => state.filter((el) => el.id !== payload[0][0].id),
  UPDATE_ADD_BOARD: (state, {payload}) => [...state, payload],
  UPDATE_EDIT_BOARD: (state, {payload}) => state.map((board) => board.id !== payload[0].id ? board : (board.name = payload[0].name, board)),
}, [])

export const noteReducer: Reducer<Array<Note>> = handleActions({
  RECEIVE_NOTES: (state, {payload}) => payload,
  UPDATE_REMOVE_BOARD: (state, {payload}) => state.filter((el) => el.boardId !== payload[0][0].id),
  UPDATE_REMOVE_NOTE: (state, {payload}) => state.filter((el) => el.id !== payload[0].id),
  UPDATE_ADD_NOTE: (state, {payload}) => [...state, payload],
  UPDATE_EDIT_NOTE: (state, {payload}) => state.map((note) => note.id !== payload[0].id ? note : ( note.message = payload[0].message, note)),
  UPDATE_TOGGLE_CHECK: (state, {payload}) => state.map((note) => note.id !== payload.id ? note : (note.done = !payload.done, note)),
}, [])

export default combineReducers({
  boards: boardReducer,
  notes: noteReducer,
})
