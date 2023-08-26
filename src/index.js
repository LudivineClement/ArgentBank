import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

//REDUX
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { userLoginSuccess } from './actions/user.action'; 

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(userLoginSuccess(token));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
