import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import App from './components/App';
import {store, history} from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
console.log("Nodepah=======", process.env.NODE_PATH);
ReactDOM.render(
  	<Provider store={store}>
    	<App history={history} />
  	</Provider>,
  	document.getElementById('root')
);
registerServiceWorker();
