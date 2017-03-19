import createReducer from './createReducer'
import * as types from '../actions/types'

export const questionList = createReducer([], {
  [types.FETCH_QUESTION_LIST_SUCCESS](state, action) {
    return action.questions;
  },[types.FETCH_QUESTION_LIST_FAILED](state, action) {
    console.warn(action.message);
    return state;
  }
});

