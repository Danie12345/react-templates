import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stuff from './template-reducer/template-reducer';

const rootReducer = combineReducers({
  stuff
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
