// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addBoard} from '../redux/actions'
import {editNote} from '../redux/actions'
import {editBoard} from '../redux/actions'
import {toggleCheck} from '../redux/actions'
import {fetchBoards} from '../redux/actions'
import {getBoards} from '../redux/selectors'
import {fetchNotes} from '../redux/actions'
import {getNotes} from '../redux/selectors'
import {removeNote} from '../redux/actions'
import {removeBoard} from '../redux/actions'
import {addNote} from '../redux/actions'

import type {RootState} from '$src/root/types'
import BoardList from './board-list'
import css from '../styles/App.css'

import {board} from './types'
import {note} from './types'

type Props = {
  fetchBoards: Function,
  fetchNotes: Function,
  removeBoard: Function,
  removeBoard: Function,
  boards: Array<board>,
  notes: Array<note>,
  removeNote: Function,
  addBoard: Function,
  addNote: Function,
  editNote: Function,
  editBoard: Function,
  toggleCheck: Function,
}

class App extends Component {
  props: Props

  componentWillMount() {
    this.props.fetchBoards()
    this.props.fetchNotes()
  }

  render() {
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Post-it App</h1>
        <BoardList boards={this.props.boards} notes={this.props.notes} removeNote={this.props.removeNote} removeBoard={this.props.removeBoard}  addBoard={this.props.addBoard} addNote={this.props.addNote} editNote={this.props.editNote} editBoard={this.props.editBoard} toggleCheck={this.props.toggleCheck}/>
      </div>
    )
  }
}

// transform redux state into props I need
const mapStateToProps = (state: RootState) => ({
  boards: getBoards(state),
  notes: getNotes(state),
})

export default connect(mapStateToProps, {fetchBoards, fetchNotes, removeBoard, removeNote, addBoard, addNote, editNote, editBoard, toggleCheck})(App)
