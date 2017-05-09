// @flow

import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import boardReducer from '../Redux/reducer'
import noteReducer from '../Redux/reducer'

import type {Reducer} from '../types'
import type {RootState} from './types'

export default (): Reducer<RootState> =>
  combineReducers({
    board: boardReducer,
    note: noteReducer,
    form: formReducer,
  })
