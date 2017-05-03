import React from 'react'
import css from './board-item.css'

const CreateBoard = (props) => {

  let inputText
  const handleSubmit = (e) => {
    e.preventDefault()
    let title = inputText.value
    inputText.value = ''
    props.handleAddBoard(title)
  }

  return (
    <div className={css.component_item}>
      <form className={css.title} onSubmit={handleSubmit}>
        <input className={css.board_title} placeholder="Add a new post-it" ref={ el => inputText = el } autoFocus required />
        <button className={css.btn}>Add</button>
      </form>
    </div>

  )
}

export default CreateBoard
