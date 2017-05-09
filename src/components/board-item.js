// @flow
import React, {Component} from 'react'
import CreateNote from './create-note'
import NoteItem from './note-item'
import css from '../styles/board-item.css'

type Props = {
  removeBoard: Function,
  removeNote: Function,
  handleAddNote: Function,
  editNote: Function,
  editBoard: Function,
  toggleCheck: Function,
  addNote: Function,
  id: number,
  notes: Array<mixed>,
  name: string,
  boardId: number,
  inputText: string,
  e: mixed,

}

class BoardItem extends Component {
  props: Props
  state = {
    editableAddNote: false,
    editableBoard: false,
  }

  handleRemoveBoard = () => {
    this.props.removeBoard(this.props.id)
  }

  handleEditBoard = () => {
    this.setState({
      editableBoard: true,
    })
  }

  saveEditedBoard = (e) => {
    e.preventDefault()
    let text = this.inputText.value
    console.log(text)
    this.props.editBoard({id: this.props.id, text})
    this.setState({
      editableBoard: false,
    })
  }

  handleAddNote = () => {
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
    let buttonAddNote = <button onClick={this.handleAddNote} className={css.btn}>Add a note</button>

    let newNote
    if (this.state.editableAddNote) {
      newNote = <CreateNote addNote={this.props.addNote} handleStateAddNote={this.handleStateAddNote} boardId={this.props.id}/>
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
                <button onClick={this.handleRemoveBoard} className={css.btn_icon}>&#xe811;</button>
                <button onClick={this.handleEditBoard} className={css.btn_icon}>&#xe802;</button>
              </div>
    }

    return (

      <div className={css.component_item}>
        {title}
        <div className={css.notes}>
          {filteredNotes.map((note) => <NoteItem key={note.id} {...note} removeNote={this.props.removeNote} editNote={this.props.editNote} toggleCheck={this.props.toggleCheck}/>)}
        </div>
        {newNote}
        {buttonAddNote}
      </div>
    )
  }

}

export default BoardItem
