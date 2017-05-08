import {createAction} from 'redux-actions'

export const fetchBoards =
  createAction('FETCH_BOARDS')

export const receiveBoards =
  createAction('RECEIVE_BOARDS')

export const fetchNotes =
  createAction('FETCH_NOTES')

export const receiveNotes =
  createAction('RECEIVE_NOTES')

export const removeNote =
  createAction('REMOVE_NOTE')

export const updateRemoveNote =
  createAction('UPDATE_REMOVE_NOTE')

export const removeBoard =
  createAction('REMOVE_BOARD')

export const updateRemoveBoard =
  createAction('UPDATE_REMOVE_BOARD')

export const addBoard =
  createAction('ADD_BOARD')

export const updateAddBoard =
  createAction('UPDATE_ADD_BOARD')

export const addNote =
  createAction('ADD_NOTE')

export const updateAddNote =
  createAction('UPDATE_ADD_NOTE')

export const editNote =
  createAction('EDIT_NOTE')

export const updateEditNote =
  createAction('UPDATE_EDIT_NOTE')

export const editBoard =
  createAction('EDIT_BOARD')

export const updateEditBoard =
  createAction('UPDATE_EDIT_BOARD')

export const toggleCheck =
  createAction('TOGGLE_CHECK')

export const updateToggleCheck =
  createAction('UPDATE_TOGGLE_CHECK')
