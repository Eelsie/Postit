// @flow
import React, {Component} from 'react'
import css from '../styles/board-item.css'

type Props = {
  handleAddBoard: Function,
}

class CreateBoard extends Component {
  props: Props
  state = {
    value: '',
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddBoard(this.state.value)
    this.setState({value: ''})
  }

  render() {
    return (
      <div className={css.component_item}>
        <form className={css.title} onSubmit={this.handleSubmit}>
          <input className={css.board_title} placeholder="Add a new post-it" value={this.state.value} onChange={this.handleChange} autoFocus required />
          <button className={css.btn}>Add</button>
        </form>
      </div>
    )
  }
}

export default CreateBoard
