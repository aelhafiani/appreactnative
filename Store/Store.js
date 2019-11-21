import {createStore,applyMiddleware} from 'redux'
import combineReducers from './Reducers/index'
import ReduxThunk from 'redux-thunk'

export default createStore(combineReducers,{},applyMiddleware(ReduxThunk))