import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import 'modern-normalize/modern-normalize.css';
import './index.css';

import { persistor, store } from './reduxTodo/store.js';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
