import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

import type {Reducer} from '../types'

export const boardReducer: Reducer<Array<Board>> = handleActions({
  RECEIVE_BOARDS: (state, {payload}) => payload,
  REMOVE_BOARD: (state, {payload}) => state.filter((el) => el.id !== payload),
  ADD_BOARD: (state, {payload}) => [...state, payload],
  EDIT_BOARD: (state, {payload}) => state.map((board) => board.id !== payload.id ? board : (board.name = payload.text, board)),
}, [])

export const noteReducer: Reducer<Array<Note>> = handleActions({
  RECEIVE_NOTES: (state, {payload}) => payload,
  // can I have the same action in two different reducers?
  REMOVE_BOARD: (state, {payload}) => state.filter((el) => el.boardId !== payload),
  REMOVE_NOTE: (state, {payload}) => state.filter((el) => el.id !== payload),
  ADD_NOTE: (state, {payload}) => [...state, payload],
  EDIT_NOTE: (state, {payload}) => state.map((note) => note.id !== payload.id ? note : ( note.message = payload.text, note)),
  TOGGLE_CHECK: (state, {payload}) => state.map((note) => note.id !== payload.id ? note : (note.done = !payload.done, note)),
}, [])

export default combineReducers({
  boards: boardReducer,
  notes: noteReducer,
})
