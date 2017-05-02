import React, {Component} from 'react'
import css from './board-item.css'

type Props = {
  note: array,
  message: string,
  id: integer,
  editableNote: boolean,
  handleRemoveNote: object,
  handleEditNote: object,
}

class NoteItem extends Component {
  constructor(props: Props) {
    super(props: Props)

    this.state = {
      editableNote: false,
    }
    this.removeNote = this.removeNote.bind(this)
    this.editNote = this.editNote.bind(this)
  }

  removeNote(id, e) {
    e.preventDefault()
    this.props.handleRemoveNote(id)
  }

  editNote(e) {
    e.preventDefault()
    this.setState({
      editableNote: true,
    })
  }

  saveEditedNote(id, e) {
    e.preventDefault()
    let text = this.inputText.value
    if (text.length > 0) {
      this.props.handleEditNote(id, text)
    }
    this.setState({
      editableNote: false,
    })
  }

  render() {

    if(this.state.editableNote) {
      return(
        <form className={css.notes_item} onSubmit={(e) => this.saveEditedNote(this.props.id, e)}>
          <input defaultValue={this.props.message} type="text" autoFocus ref={ el => this.inputText = el }></input>
          <button className={`${css.btn} ${css.btn_save_note}`}>Save</button>
        </form>
      )
    } else {
      return(
        <div className={css.notes_item}>
          <input type="checkbox" value="None" name="check" />
          <label>{this.props.message}
            <span onClick={(e) => this.removeNote(this.props.id, e)} className={`${css.btn_icon} ${css.smaller_icon}`}>&#xe811;</span>
            <span onClick={this.editNote} className={`${css.btn_icon} ${css.smaller_icon}`}>&#xe802;</span>
          </label>
        </div>
      )
    }
  }

}

export default NoteItem
