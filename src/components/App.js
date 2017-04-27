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
  }

  componentWillMount() {
    this.fetchBoards()
  }

  // fetchBoards = async () => {
  //   const response = await fetch('http://localhost:1337/boards')
  //   const boards = await response.json()
  //   this.setState({boards})
  //   console.log(boards)
  // }

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

  render() {
    return (
      <div className={css.wrapper}>
        <h1 className={css.title}>Post-it App</h1>
        <BoardList boards={this.state.boards} notes={this.state.notes}/>
      </div>
    )
  }
}

export default App
