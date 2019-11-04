import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import {save} from 'redux-localstorage-simple';


import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers(
	{
		usersPage: usersReducer,
		form: formReducer,
	});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, compose(
	composeEnhancers(
		applyMiddleware(thunkMiddleware, save({namespace: 'users'}))
	)));


export default store;