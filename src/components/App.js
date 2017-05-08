// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {receiveBoards} from '../redux/actions'
import {receiveNotes} from '../redux/actions'
import {removeBoard} from '../redux/actions'
import {addBoard} from '../redux/actions'
import {addNote} from '../redux/actions'
import {removeNote} from '../redux/actions'
import {editNote} from '../redux/actions'
import {editBoard} from '../redux/actions'
import {toggleCheck} from '../redux/actions'

import type {RootState} from '$src/root/types'
import BoardList from './board-list'
import css from '../styles/App.css'

class App extends Component {
  props: Props

  componentWillMount() {
    this.fetchBoards()
    this.fetchNotes()
  }

  async fetchBoards() {
    const response = await fetch(`http://localhost:1337/boards`)
    const boards = await response.json()
    this.props.receiveBoards(boards)
  }
  async fetchNotes() {
    const response = await fetch(`http://localhost:1337/notes`)
    const notes = await response.json()
    this.props.receiveNotes(notes)
  }

  handleRemoveBoard = (id) => {
    fetch(`http://localhost:1337/boards/${id}`, {
      method: 'DELETE',
    }).then(() => {
      this.props.removeBoard(id)
      // WITHOUT REDUX
      // const filteredBoards = this.boards.filter((el) => el.id !== id)
      // const filteredNotes = this.notes.filter((el) => el.boardId !== id)
      // this.setState({
      //   boards: filteredBoards,
      //   notes: filteredNotes,
      // })
    })
  }

  handleRemoveNote = (id) => {
    fetch(`http://localhost:1337/notes/${id}`, {
      method: 'DELETE',
    }).then(() => {
      this.props.removeNote(id)
      // WITHOUT REDUX
      // const filteredNotes = this.props.notes.filter((el) => el.id !== id)
      // this.setState({
      //   notes: filteredNotes,
      // })
    })
  }

  // I cannot get data back!!
  handleAddBoard = (text) => {
    fetch(`http://localhost:1337/boards/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'name': text}),
    }).then((resp) => resp.json())
      .then((board) => this.props.addBoard(board))

      // WITHOUT REDUX
      // fetch('http://localhost:1337/boards')
      //   .then((response) => response.json())
      //   .then((boards) => {
      //     this.setState({boards})
      //   })
  }

  handleAddNote = (text, id) => {
    fetch(`http://localhost:1337/notes/${id}`, {
      method: 'POST',
      body: JSON.stringify({'message': text, 'boardId': id, 'done': false}),
    }).then((resp) => resp.json())
      .then((note) => this.props.addNote(note))


      // WITHOUT REDUX
      // fetch('http://localhost:1337/notes')
      //   .then((response) => response.json())
      //   .then((notes) => {
      //     this.setState({notes})
      //   })

  }

  handleEditNote = (id, text) => {
    fetch(`http://localhost:1337/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({'message': text}),
    }).then(() => {
      this.props.editNote({id, text})
      // WITHOU REDUX
      // let index = this.state.notes.findIndex((el) => el.id === id)
      // const {notes} = this.state
      // notes[index].message = text
      // this.setState({
      //   notes,
      // })
    })
  }

  handleEditBoard = (id, text) => {
    fetch(`http://localhost:1337/boards/${id}`, {
      method: 'PUT',
      body: JSON.stringify({'name': text}),
    }).then(() => {
      this.props.editBoard({id, text})
      // WITHOUT REDUX
      // let index = this.state.boards.findIndex((el) => el.id === id)
      // const {boards} = this.state
      // boards[index].name = text
      // this.setState({
      //   boards,
      // })
    })
  }

  handleChecked = (id, done) => {
    fetch(`http://localhost:1337/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({'done': !done}),
    }).then(() => {
      this.props.toggleCheck({id, done})
      // WITHOU REDUX
      // let index = this.state.notes.findIndex((el) => el.id === id)
      // const {notes} = this.state
      // notes[index].done = !done
      // this.setState({
      //   notes,
      // })
    })
  }


  render() {
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Post-it App</h1>
        <BoardList boards={this.props.boards} notes={this.props.notes} handleRemoveBoard={this.handleRemoveBoard} handleRemoveNote={this.handleRemoveNote} handleAddBoard={this.handleAddBoard} handleAddNote={this.handleAddNote} handleEditNote={this.handleEditNote} handleEditBoard={this.handleEditBoard} handleChecked={this.handleChecked}/>
      </div>
    )
  }
}

// transform redux state into props I need
const mapStateToProps = (state: RootState) => ({
  boards: state.board.boards,
  notes: state.note.notes,
})

export default connect(mapStateToProps, {receiveBoards, receiveNotes, removeBoard, addBoard, addNote, removeNote, editNote, editBoard, toggleCheck})(App)
