// @flow

import {fork} from 'redux-saga/effects'
import helloSaga from '../redux/saga'

export default () =>
  // $FlowFixMe
  function* rootSaga() {
    yield [
      fork(helloSaga),
    ]
  }
