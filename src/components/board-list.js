// @flow
import React from 'react'
import BoardItem from './board-item'
import CreateBoard from './create-board'
import css from '../styles/App.css'

import {board} from './types'
import {note} from './types'

type Props = {
  boards: Array<board>,
  notes: Array<note>,
  removeBoard: Function,
  removeNote: Function,
  handleAddBoard: Function,
  handleAddNote: Function,
  editNote: Function,
  editBoard: Function,
  toggleCheck: Function,
}

const BoardList = (props: Props) => {
  return (
    <div className={css.component}>
      {props.boards.map((board) => <BoardItem key={board.id} {...board} notes={props.notes} removeBoard={props.removeBoard} removeNote={props.removeNote} addNote={props.addNote} editNote={props.editNote} editBoard={props.editBoard} toggleCheck={props.toggleCheck}/>)}
      <CreateBoard addBoard={props.addBoard}/>
    </div>
  )
}

export default BoardList
