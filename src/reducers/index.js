import * as studentReducers from './Student'
import * as questionReducers from './Question'
import {  combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers(Object.assign(studentReducers,questionReducers,{form: formReducer}));

export default rootReducer;