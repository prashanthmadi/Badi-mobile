import {createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers';
import mySaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger';

export default (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const logger = createLogger();
    store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware,logger));
    sagaMiddleware.run(mySaga)
    return store;
}