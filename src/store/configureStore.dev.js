import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import {createLogger} from 'redux-logger';

import Saga from '../saga';
import reducer from '../reducer';

// create middlewares
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
	collapsed: true
});


let middleware = applyMiddleware(
  	routerMiddleware(history),
  	sagaMiddleware,
  	logger
);


if (module.hot) {
	module.hot.accept('../reducer', () => {
    	store.replaceReducer(reducer)
  	});
}

// add the redux dev tools
middleware = compose(middleware, window.devToolsExtension());

// create store
const store = createStore(reducer, middleware);

// run saga middleware
sagaMiddleware.run(Saga);

// export
export { store, history };