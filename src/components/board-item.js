// @flow
import React, {Component} from 'react'
import CreateNote from './create-note'
import NoteItem from './note-item'
import css from '../styles/board-item.css'

type Props = {
  handleRemoveBoard: object,
  handleRemoveNote: object,
  handleAddNote: object,
  handleEditNote: object,
  handleEditBoard: object,
  handleChecked: object,
  id: integer,
  notes: array,
  name: string,
}

class BoardItem extends Component {
  props: Props
  state = {
    editableAddNote: false,
    editableBoard: false,
  }

  removeBoard = () => {
    this.props.handleRemoveBoard(this.props.id)
  }

  editBoard = () => {
    this.setState({
      editableBoard: true,
    })
  }

  saveEditedBoard = (e) => {
    e.preventDefault()
    let text = this.inputText.value
    this.props.handleEditBoard(this.props.id, text)
    this.setState({
      editableBoard: false,
    })
  }

  addNote = () => {
    this.setState({
      editableAddNote: true,
    })
  }

  handleStateAddNote = () => {
    this.setState({
      editableAddNote: false,
    })
  }

  render() {

    const filteredNotes = this.props.notes.filter((note) => note.boardId === this.props.id)
    let buttonAddNote = <button onClick={this.addNote} className={css.btn}>Add a note</button>

    let newNote
    if (this.state.editableAddNote) {
      newNote = <CreateNote handleAddNote={this.props.handleAddNote} handleStateAddNote={this.handleStateAddNote} boardId={this.props.id}/>
      buttonAddNote = null
    }

    let title
    if(this.state.editableBoard) {
      title = <form className={css.title} onSubmit={this.saveEditedBoard}>
                <input className={`${css.board_title} ${css.narrow}`} defaultValue={this.props.name} ref={ el => this.inputText = el } autoFocus required />
                <button className={`${css.btn} ${css.btn_save_note}`}>Save</button>
              </form>
    } else {
      title = <div className={css.title}>
                <h3 className={css.board_title}>{this.props.name}</h3>
                <button onClick={this.removeBoard} className={css.btn_icon}>&#xe811;</button>
                <button onClick={this.editBoard} className={css.btn_icon}>&#xe802;</button>
              </div>
    }

    return (

      <div className={css.component_item}>
        {title}
        <div className={css.notes}>
          {filteredNotes.map((note) => <NoteItem key={note.id} {...note} handleEditNote={this.props.handleEditNote} handleRemoveNote={this.props.handleRemoveNote} handleChecked={this.props.handleChecked}/>)}
        </div>
        {newNote}
        {buttonAddNote}
      </div>
    )
  }

}

export default BoardItem
