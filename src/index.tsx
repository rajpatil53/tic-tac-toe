import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import GlobalContextProvider from './app/context/GlobalContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

