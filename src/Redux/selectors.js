import type {Selector} from '../../types'
import type {Board} from './types'

export const getBoards: Selector<Array<Board>, *> = (state) => state.board.boards
export const getNotes = (state) => state.note.notes
