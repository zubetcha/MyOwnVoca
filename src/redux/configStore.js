import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import voca from './modules/voca';

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ voca });

const store = createStore(rootReducer, enhancer);

export default store;