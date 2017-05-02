import React from 'react'
import BoardItem from './board-item'
import CreateBoard from './create-board'
import css from './App.css'

type Props = {
  boards: array,
  notes: array,
  handleRemoveBoard: object,
  handleRemoveNote: object,
  handleAddBoard: object,
  handleAddNote: object,
  handleEditNote: object,
}

const BoardList = (props: Props) => {
  return (
    <div className={css.component}>
      {props.boards.map((board) => <BoardItem key={board.id} {...board} notes={props.notes} handleRemoveBoard={props.handleRemoveBoard} handleRemoveNote={props.handleRemoveNote} handleAddNote={props.handleAddNote} handleEditNote={props.handleEditNote}/>)}
      <CreateBoard handleAddBoard={props.handleAddBoard}/>
    </div>
  )
}

export default BoardList
