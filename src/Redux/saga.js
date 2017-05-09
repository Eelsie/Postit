// @flow

import {takeLatest} from 'redux-saga'
import {fork, put} from 'redux-saga/effects'
import {receiveBoards} from './actions'
import {receiveNotes} from './actions'
import {updateRemoveNote} from './actions'
import {updateRemoveBoard} from './actions'
import {updateAddNote} from './actions'
import {updateAddBoard} from './actions'
import {updateToggleCheck} from './actions'
import {updateEditBoard} from './actions'
import {updateEditNote} from './actions'

import {reset} from 'redux-form'


function* fetchBoards(): Generator<> {
  const response = yield fetch(`http://localhost:1337/boards`)
  const boards = yield response.json()

  yield put(receiveBoards(boards))
}

function* fetchNotes(): Generator<> {
  const response = yield fetch(`http://localhost:1337/notes`)
  const notes = yield response.json()

  yield put(receiveNotes(notes))
}

function* removeNote(payload): Generator<> {
  const response = yield fetch(`http://localhost:1337/notes/${payload.payload}`, {
    method: 'DELETE',
  })
  const note = yield response.json()

  yield put(updateRemoveNote(note))
}

function* removeBoard(payload): Generator<> {
  const response = yield fetch(`http://localhost:1337/boards/${payload.payload}`, {
    method: 'DELETE',
  })
  const board = yield response.json()

  yield put(updateRemoveBoard(board))
}

function* addNote(payload): Generator<> {
  const response = yield fetch(`http://localhost:1337/notes/${payload.payload.boardId}`, {
    method: 'POST',
    body: JSON.stringify({'message': payload.payload.message, 'boardId': payload.payload.boardId, 'done': false}),
  })
  const note = yield response.json()
  yield put(updateAddNote(note))
  yield put(reset('newNote'))
}

function* addBoard(payload): Generator<> {
  const response = yield fetch(`http://localhost:1337/boards/`, {
    method: 'POST',
    body: JSON.stringify({'name': payload.payload}),
  })
  const board = yield response.json()
  yield put(updateAddBoard(board))
  yield put(reset('newBoard'))
}

function* toggleCheck(payload): Generator<> {
  yield fetch(`http://localhost:1337/notes/${payload.payload.id}`, {
    method: 'PUT',
    body: JSON.stringify({'done': !payload.payload.done}),
  })
  yield put(updateToggleCheck(payload))
}

function* editBoard(payload): Generator<> {
  const response = yield fetch(`http://localhost:1337/boards/${payload.payload.id}`, {
    method: 'PUT',
    body: JSON.stringify({'name': payload.payload.text}),
  })
  const board = yield response.json()
  yield put(updateEditBoard(board))
}

function* editNote(payload): Generator<> {
  const response = yield fetch(`http://localhost:1337/notes/${payload.payload.id}`, {
    method: 'PUT',
    body: JSON.stringify({'message': payload.payload.text}),
  })
  const note = yield response.json()
  yield put(updateEditNote(note))
}

export default function* (): Generator<> {
  yield [
    fork(function* (): Generator<> {
      yield takeLatest('FETCH_BOARDS', fetchBoards)
      yield takeLatest('FETCH_NOTES', fetchNotes)
      yield takeLatest('REMOVE_NOTE', removeNote)
      yield takeLatest('REMOVE_BOARD', removeBoard)
      yield takeLatest('ADD_NOTE', addNote)
      yield takeLatest('ADD_BOARD', addBoard)
      yield takeLatest('TOGGLE_CHECK', toggleCheck)
      yield takeLatest('EDIT_NOTE', editNote)
      yield takeLatest('EDIT_BOARD', editBoard)

    }),
  ]
}
