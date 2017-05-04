// @flow
import React from 'react'
import BoardItem from './board-item'
import CreateBoard from './create-board'
import css from '../styles/App.css'

type Props = {
  boards: array,
  notes: array,
  handleRemoveBoard: object,
  handleRemoveNote: object,
  handleAddBoard: object,
  handleAddNote: object,
  handleEditNote: object,
  handleEditBoard: object,
  handleChecked: object,
}

const BoardList = (props: Props) => {
  return (
    <div className={css.component}>
      {props.boards.map((board) => <BoardItem key={board.id} {...board} notes={props.notes} handleRemoveBoard={props.handleRemoveBoard} handleRemoveNote={props.handleRemoveNote} handleAddNote={props.handleAddNote} handleEditNote={props.handleEditNote} handleEditBoard={props.handleEditBoard} handleChecked={props.handleChecked}/>)}
      <CreateBoard handleAddBoard={props.handleAddBoard}/>
    </div>
  )
}

export default BoardList
