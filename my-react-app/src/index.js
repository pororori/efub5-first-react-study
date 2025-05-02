import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css'; 
import Accommodate from './Week3/Accommodate';
import reportWebVitals from './reportWebVitals';
import ConfirmButton from './Week4/ConfirmButton';
import LandingPage from './Week4/LandingPage';
import AttendanceBook from './Week4/AttendanceBook';
import SignUp from './Week5/SignUp';
import Calculator from './Week5/Calculator';
import ProfileCard from './Week5/ProfileCard';
import DarkOrLight from './Week6/DarkOrLight';
import Blocks from './Week6/Blocks';

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <Blocks/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
