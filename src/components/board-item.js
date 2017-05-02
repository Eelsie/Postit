import React from 'react'
import css from './board-item.css'

type Props = {
  name: string,
  notes: array
}

const BoardItem = (props: Props) => {

  const filteredNotes = props.notes.filter((note) => note.boardId === props.id)

  const removeBoard = (e) => {
    e.preventDefault()
    props.handleRemoveBoard(props.id)
  }

  const removeNote = (id, e) => {
    e.preventDefault()
    props.handleRemoveNote(id)
  }

  const addNote = (e) => {
    e.preventDefault()
  }

  return (
    <div className={css.component_item}>
        <h3 className={css.board_title}>{props.name}</h3>
      <div className={css.notes}>
        {filteredNotes.map((note) =>
          <div className={css.notes_item}>
            <input type="checkbox" value="None" name="check" />
            <label key={note.id}>{note.message} <span onClick={(e) => removeNote(note.id, e)} className={`${css.btn_icon} ${css.smaller_icon}`}>&#xe811;</span> </label>
          </div>
        )}
      </div>
      <div>
        <button onClick={addNote} className={css.btn}>Add a note</button>
        <button className={css.btn_icon}>&#xe802;</button>
        <button onClick={removeBoard} className={css.btn_icon}>&#xe811;</button>
      </div>
    </div>
  )
}

export default BoardItem
