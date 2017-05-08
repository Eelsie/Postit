// @flow

import {fork} from 'redux-saga/effects'
import boardSaga from '../redux/saga'

export default () =>
  // $FlowFixMe
  function* rootSaga() {
    yield [
      fork(boardSaga),
    ]
  }
