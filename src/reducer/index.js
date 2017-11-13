import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

export const authorize = (email, password) => ({
  	type: 'AUTH_REQUEST',
  	payload: { email, password }
});

const reducer = combineReducers({
	router: routerReducer
});

export default reducer;