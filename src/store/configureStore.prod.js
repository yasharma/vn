import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';

import Saga from '../saga';
import reducer from '../reducer';

// create middlewares
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(
  	routerMiddleware(history),
  	sagaMiddleware
);

// create store
const store = createStore(reducer, middleware);

// run saga middleware
sagaMiddleware.run(Saga);

// export
export { store, history };