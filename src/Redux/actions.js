import {createAction} from 'redux-actions'


export const receiveBoards =
  createAction('RECEIVE_BOARDS')

export const receiveNotes =
  createAction('RECEIVE_NOTES')

export const removeBoard =
  createAction('REMOVE_BOARD')

export const removeNote =
  createAction('REMOVE_NOTE')

export const editNote =
  createAction('EDIT_NOTE')

export const editBoard =
  createAction('EDIT_BOARD')

export const toggleCheck =
  createAction('TOGGLE_CHECK')
