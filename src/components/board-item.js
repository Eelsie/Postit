import React, {Component} from 'react'
import CreateNote from './create-note'
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
      editableEditNote: false,
    }

    this.removeBoard = this.removeBoard.bind(this)
    this.removeNote = this.removeNote.bind(this)
    this.addNote = this.addNote.bind(this)
    this.handleStateAddNote = this.handleStateAddNote.bind(this)
    this.editNote = this.editNote.bind(this)

  }

  removeBoard(e) {
    e.preventDefault()
    this.props.handleRemoveBoard(this.props.id)
  }

  removeNote(id, e) {
    e.preventDefault()
    this.props.handleRemoveNote(id)
  }

  editNote(id, e) {
    e.preventDefault()
    this.setState({
      editableEditNote: true,
    })
    this.props.handleEditNote(id)
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
          {filteredNotes.map((note) =>
            <div className={css.notes_item}>
              <input type="checkbox" value="None" name="check" />
              <label key={note.id}>{note.message}
                <span onClick={(e) => this.removeNote(note.id, e)} className={`${css.btn_icon} ${css.smaller_icon}`}>&#xe811;</span>
                <span onClick={(e) => this.editNote(note.id, e)} className={`${css.btn_icon} ${css.smaller_icon}`}>&#xe802;</span>
              </label>
            </div>
          )}
        </div>
        {newNote}
        {buttonAddNote}
      </div>
    )
  }

}

export default BoardItem
