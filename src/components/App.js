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

  render() {
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Post-it App</h1>
        <BoardList boards={this.state.boards} notes={this.state.notes} handleRemoveBoard={this.handleRemoveBoard} handleRemoveNote={this.handleRemoveNote}/>
      </div>
    )
  }
}

export default App