// @flow
import React, {Component} from 'react'

import css from '../styles/board-item.css'


type Props = {
  note: array,
  message: string,
  id: number,
  editableNote: boolean,
  removeNote: Function,
  handleEditNote: Function,
  editNote: Function,
  toggleCheck: Function,
  done: boolean,
}

class NoteItem extends Component {
  props: Props
  state = {
    editableNote: false,
  }

  handleEditNote = () => {
    this.setState({
      editableNote: true,
    })
  }

  saveEditedNote = (id, e) => {
    e.preventDefault()
    let text = this.inputText.value
    this.props.editNote({id, text})
    this.setState({
      editableNote: false,
    })
  }

  handleChecked = (id, done) => {
    this.props.toggleCheck(id, done)
  }

  handleRemoveNote = (id) => {
    this.props.removeNote(id)
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
          <input onChange={() => this.handleChecked(this.props.id, this.props.done)} type="checkbox" value="None" name="check" checked={this.props.done}/>
          <label>{this.props.message}
            <span onClick={() => this.handleRemoveNote(this.props.id)} className={`${css.btn_icon} ${css.smaller_icon}`}>&#xe811;</span>
            <span onClick={this.handleEditNote} className={`${css.btn_icon} ${css.smaller_icon}`}>&#xe802;</span>
          </label>
        </div>
      )
    }
  }

}

export default NoteItem
