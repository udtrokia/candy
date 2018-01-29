import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApps from './reducers'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

//document.addEventListener("touchmove", (e)=>{
//    e.preventDefault()
//    e.stopPropagation()
//}, false);

const store = createStore(todoApps)
const theme = createMuiTheme({
	overrides: {
		MuiFormLabel:{
			focused:{
				color:'#ffbb42'
			}
		},
		MuiInput: {
			underline: {
				'&:before': {
					backgroundColor:'rgba(0, 0, 0, 0.54)'
				}
			},
			inkbar: {
				'&:after': {
					backgroundColor:'#ffbb42'
				}
			}
		}
	}
})

ReactDOM.render(
    <Provider store={store}>
	<MuiThemeProvider theme={theme}>
	    <App />
	</MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
