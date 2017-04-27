import React from 'react'
import css from './App.css'

type Props = {
  name: string,
  notes: array
}

const BoardItem = (props: Props) => {

  const filteredNotes = props.notes.filter((note) => note.boardId === props.id)

  return (
    <div className={css.component_item}>
      <h3 className={css.board_title}>{props.name}</h3>
      <ul>
        {filteredNotes.map((note, index) => <li key={index}>{note.message}</li>)}
      </ul>
    </div>
  )
}

export default BoardItem
