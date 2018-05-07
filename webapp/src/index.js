import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline'

import { paleTeal } from './themes';

ReactDOM.render(
		<MuiThemeProvider theme={createMuiTheme(paleTeal)}>
			<CssBaseline />
			<App/>
		</MuiThemeProvider>,
	document.getElementById('root'));