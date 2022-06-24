import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCQpsiNSefRsmL6HNyxLnyFAcDLZYnQUQM',
  authDomain: 'tictactoe-76767.firebaseapp.com',
  projectId: 'tictactoe-76767',
  storageBucket: 'tictactoe-76767.appspot.com',
  messagingSenderId: '1054590196186',
  appId: '1:1054590196186:web:fc08c4aee617e35f6508e3',
  measurementId: 'G-BHK6DPLZV9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
