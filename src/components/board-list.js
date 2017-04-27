import React from 'react'
import BoardItem from './board-item'
import css from './App.css'

const BoardList = (props) => {
  return (
    <div className={css.component}>
      {props.boards.map((board) => <BoardItem key={board.id} {...board} notes={props.notes}/>)}
    </div>
  )
}

export default BoardList
