import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from "./globalStyles";
import {Provider} from 'react-redux';
import {store, reduxPersist} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle/>
                <PersistGate persistor={reduxPersist}>
                    <App/>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
    , document.getElementById('root')
);

serviceWorker.unregister();
