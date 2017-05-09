// @flow
import React from 'react'
import {Field, reduxForm} from 'redux-form'

import css from '../styles/board-item.css'

type Props = {
  handleSubmit: Function,
}

const CreateBoard = (props: Props) => {
  return (
    <div className={css.component_item}>
      <form className={css.title} onSubmit={props.handleSubmit}>
        <Field name="boardName" component="input" type="text" className={css.board_title} placeholder="Add a new post-it" autoFocus required />
        <button type="submit" className={css.btn}>Add</button>
      </form>
    </div>
  )
}

export default reduxForm({form: 'newBoard'})(CreateBoard)
