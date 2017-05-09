// @flow
import React from 'react'
import {Field, reduxForm} from 'redux-form'
import css from '../styles/create-note.css'

type Props = {
  handleSubmit: Function,
}

const CreateNote = (props: Props) => {
  return (
    <form className={css.notes} onSubmit={props.handleSubmit}>
      <Field name="noteName" component="input" type="text" className={css.notes_item} placeholder="Add a new note" autoFocus required />
      <button type="submit" className={css.btn}>Add</button>
    </form>
  )
}


export default reduxForm({form: 'newNote'})(CreateNote)
