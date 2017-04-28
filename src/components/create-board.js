import React from 'react'
import css from './app.css'

const CreateBoard = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <form className={css.component_item} onSubmit={handleSubmit}>
      <input className={css.board_title} placeholder="Add a new post-it"/>
      <button className={css.btn}>Add</button>
    </form>
  )
}

export default CreateBoard
