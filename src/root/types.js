// @flow

import type {BoardState} from '../components/types'
import type {NoteState} from '../components/types'


export type RootState = {
  board: BoardState,
  note: NoteState,
}
