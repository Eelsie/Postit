// @flow
import React from 'react'
import BoardItem from './board-item'
import CreateBoard from './create-board'
import css from '../styles/App.css'

import {Board} from './types'
import {Note} from './types'


type Props = {
  boards: Array<Board>,
  notes: Array<Note>,
  removeBoard: Function,
  removeNote: Function,
  editNote: Function,
  editBoard: Function,
  toggleCheck: Function,
  addNote: Function,
  addBoard: Function,
}

const BoardList = (props: Props) => {

  const submitBoard = (values: Object) => {
    props.addBoard(values.boardName)
  }

  return (
    <div className={css.component}>
      {props.boards.map((board) => <BoardItem key={board.id} {...board} notes={props.notes} removeBoard={props.removeBoard} removeNote={props.removeNote} addNote={props.addNote} editNote={props.editNote} editBoard={props.editBoard} toggleCheck={props.toggleCheck}/>)}
      <CreateBoard onSubmit={submitBoard}/>
    </div>
  )
}

export default BoardList
