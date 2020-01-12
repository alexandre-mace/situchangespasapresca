import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme} from "@material-ui/core";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";
import {ThemeProvider} from '@material-ui/styles';

let theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#38d39f"
        },
        secondary: {
            main: "rgba(255, 255, 255, 0.15)"
        },
    },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
