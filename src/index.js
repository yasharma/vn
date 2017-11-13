import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import {store, history} from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  	<Provider store={store}>
    	<App history={history} />
  	</Provider>,
  	document.getElementById('root')
);
registerServiceWorker();
