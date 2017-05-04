// @flow

import {combineReducers} from 'redux'
import boardReducer from '../Redux/reducer'
import noteReducer from '../Redux/reducer'

import type {Reducer} from '../types'
import type {RootState} from './types'

export default (): Reducer<RootState> =>
  combineReducers({
    board: boardReducer,
    note: noteReducer,
  })
