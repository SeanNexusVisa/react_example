//import { createStore } from 'redux';
import userReducer from '../reducers/userReducer'
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

const middleware =  applyMiddleware(thunk);

const store = createStore(userReducer,middleware);

export default store;

