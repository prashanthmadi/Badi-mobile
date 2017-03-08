import * as studentReducers from './Student'
import {  combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers(Object.assign(studentReducers,{form: formReducer}));

export default rootReducer;