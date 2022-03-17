import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

registerServiceWorker();
reportWebVitals();
