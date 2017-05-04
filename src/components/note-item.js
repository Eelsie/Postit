// @flow
import React, {Component} from 'react'
import css from '../styles/board-item.css'

type Props = {
  note: array,
  message: string,
  id: number,
  editableNote: boolean,
  handleRemoveNote: Function,
  handleEditNote: Function,
  handleChecked: Function,
  removeNote: Function,
  done: boolean,
}

class NoteItem extends Component {
  props: Props
  state = {
    editableNote: false,
  }

  removeNote = (id) => {
    this.props.handleRemoveNote(id)
  }

  editNote = () => {
    this.setState({
      editableNote: true,
    })
  }

  saveEditedNote = (id, e) => {
    e.preventDefault()
    let text = this.inputText.value
    this.props.handleEditNote(id, text)
    this.setState({
      editableNote: false,
    })
  }

  toggleChecked = (id, done) => {
    this.props.handleChecked(id, done)
  }

  render() {
    if(this.state.editableNote) {
      return(
        <form className={css.notes_item} onSubmit={(e) => this.saveEditedNote(this.props.id, e)}>
          <input defaultValue={this.props.message} type="text" autoFocus ref={ el => this.inputText = el } required ></input>
          <button className={`${css.btn} ${css.btn_save_note}`}>Save</button>
        </form>
      )
    } else {
      return(
        <div className={css.notes_item}>
          <input onChange={() => this.toggleChecked(this.props.id, this.props.done)} type="checkbox" value="None" name="check" checked={this.props.done}/>
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
