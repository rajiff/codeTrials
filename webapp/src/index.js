import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { paleTeal } from './themes';

import AppReducers from './appReducers';

let reduxStore = createStore(AppReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={reduxStore}>
		<MuiThemeProvider theme={createMuiTheme(paleTeal)}>
			<CssBaseline />
			<App/>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root'));