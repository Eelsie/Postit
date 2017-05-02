import React, {Component} from 'react'
import CreateNote from './create-note'
import NoteItem from './note-item'
import css from './board-item.css'

type Props = {
  handleRemoveBoard: object,
  handleRemoveNote: object,
  handleAddNote: object,
  handleEditNote: object,
  id: integer,
  notes: array,
  name: string,
}

class BoardItem extends Component {
  constructor(props: Props) {
    super(props: Props)

    this.state = {
      editableAddNote: false,
    }

    this.removeBoard = this.removeBoard.bind(this)
    this.addNote = this.addNote.bind(this)
    this.handleStateAddNote = this.handleStateAddNote.bind(this)

  }

  removeBoard(e) {
    e.preventDefault()
    this.props.handleRemoveBoard(this.props.id)
  }

  addNote(e) {
    e.preventDefault()
    this.setState({
      editableAddNote: true,
    })
  }

  handleStateAddNote() {
    this.setState({
      editableAddNote: false,
    })
  }

  render() {

    const filteredNotes = this.props.notes.filter((note) => note.boardId === this.props.id)
    let newNote = null
    let buttonAddNote = <button onClick={this.addNote} className={css.btn}>Add a note</button>

    if (this.state.editableAddNote) {
      newNote = <CreateNote handleAddNote={this.props.handleAddNote} handleStateAddNote={this.handleStateAddNote} boardId={this.props.id}/>
      buttonAddNote = null
    }

    return (

      <div className={css.component_item}>
        <div>
          <button className={css.btn_icon}>&#xe802;</button>
          <button onClick={this.removeBoard} className={css.btn_icon}>&#xe811;</button>
        </div>
        <h3 className={css.board_title}>{this.props.name}</h3>
        <div className={css.notes}>
          {filteredNotes.map((note) => <NoteItem key={note.id} {...note} handleEditNote={this.props.handleEditNote} handleRemoveNote={this.props.handleRemoveNote}/>)}
        </div>
        {newNote}
        {buttonAddNote}
      </div>
    )
  }

}

export default BoardItem
