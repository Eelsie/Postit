// @flow
import React from 'react'
import css from '../styles/create-note.css'

const CreateNote = (props: Props) => {

  let inputText

  const handleSubmit = (e) => {
    e.preventDefault()
    let text = inputText.value
    if (text.length > 0) {
      inputText.value = ''
      props.addNote({text, id: props.boardId})
      props.handleStateAddNote()
    }
  }

  return (
    <form className={css.notes} onSubmit={handleSubmit}>
      <input className={css.notes_item} placeholder="Add a new note" ref={ el => inputText = el } autoFocus />
      <button className={css.btn}>Add</button>
    </form>
  )
}


export default CreateNote
