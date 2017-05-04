import {createAction} from 'redux-actions'


export const receiveBoards =
  createAction('RECEIVE_BOARDS')

export const receiveNotes =
  createAction('RECEIVE_NOTES')

export const removeNote =
  createAction('REMOVE_NOTE')

export const editNote =
  createAction('EDIT_NOTE')
