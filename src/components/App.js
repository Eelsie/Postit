import React, {Component} from 'react'
import BoardList from './board-list'
import css from './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      boards: [],
      notes: [],
    }
    this.fetchBoards = this.fetchBoards.bind(this)
    this.handleRemoveBoard = this.handleRemoveBoard.bind(this)
    this.handleRemoveNote = this.handleRemoveNote.bind(this)
    this.handleAddBoard = this.handleAddBoard.bind(this)
    this.handleAddNote = this.handleAddNote.bind(this)
    this.handleEditNote = this.handleEditNote.bind(this)
    this.handleEditBoard = this.handleEditBoard.bind(this)

  }

  componentWillMount() {
    this.fetchBoards()
  }

  fetchBoards = () => {
    fetch('http://localhost:1337/boards')
      .then((response) => response.json())
      .then((boards) => {
        this.setState({boards})
      })
    fetch('http://localhost:1337/notes')
      .then((response) => response.json())
      .then((notes) => {
        this.setState({notes})
      })
  }

  handleRemoveBoard(id) {
    fetch(`http://localhost:1337/boards/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const filteredBoards = this.state.boards.filter((el) => el.id !== id)
      const filteredNotes = this.state.notes.filter((el) => el.boardId !== id)
      this.setState({
        boards: filteredBoards,
        notes: filteredNotes,
      })
    })
  }

  handleRemoveNote(id) {
    fetch(`http://localhost:1337/notes/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const filteredNotes = this.state.notes.filter((el) => el.id !== id)
      this.setState({
        notes: filteredNotes,
      })
    })
  }

  handleAddBoard(text) {
    fetch(`http://localhost:1337/boards/`, {
      method: 'POST',
      body: JSON.stringify({'name': text}),
    }).then(() => {
      fetch('http://localhost:1337/boards')
        .then((response) => response.json())
        .then((boards) => {
          this.setState({boards})
        })
    })
  }

  handleAddNote(text, id) {
    fetch(`http://localhost:1337/notes/${id}`, {
      method: 'POST',
      body: JSON.stringify({'message': text, 'boardId': id}),
    }).then(() => {
      fetch('http://localhost:1337/notes')
        .then((response) => response.json())
        .then((notes) => {
          this.setState({notes})
        })
    })
  }

  handleEditNote(id, text) {
    fetch(`http://localhost:1337/notes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({'message': text}),
    }).then(() => {
      let index = this.state.notes.findIndex((el) => el.id === id)
      const {notes} = this.state
      notes[index].message = text
      this.setState({
        notes,
      })
    })
  }

  handleEditBoard(id, text) {
    fetch(`http://localhost:1337/boards/${id}`, {
      method: 'PUT',
      body: JSON.stringify({'name': text}),
    }).then(() => {
      let index = this.state.boards.findIndex((el) => el.id === id)
      const {boards} = this.state
      boards[index].name = text
      this.setState({
        boards,
      })
    })
  }


  render() {
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Post-it App</h1>
        <BoardList boards={this.state.boards} notes={this.state.notes} handleRemoveBoard={this.handleRemoveBoard} handleRemoveNote={this.handleRemoveNote} handleAddBoard={this.handleAddBoard} handleAddNote={this.handleAddNote} handleEditNote={this.handleEditNote} handleEditBoard={this.handleEditBoard}/>
      </div>
    )
  }
}

export default App
