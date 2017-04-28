import React from 'react'
import BoardItem from './board-item'
import css from './App.css'

type Props = {
  boards: array,
  notes: array,
  handleRemoveBoard: object,
}

const BoardList = (props: Props) => {
  return (
    <div className={css.component}>
      {props.boards.map((board) => <BoardItem key={board.id} {...board} notes={props.notes} handleRemoveBoard={props.handleRemoveBoard} handleRemoveNote={props.handleRemoveNote}/>)}
    </div>
  )
}

export default BoardList
