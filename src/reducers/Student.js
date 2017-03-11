import createReducer from './createReducer'
import * as types from '../actions/types'

export const studentsList = createReducer([], {
  [types.FETCH_STUDENT_LIST_SUCCESS](state, action) {
    return action.students;
  },
});