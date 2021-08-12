import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCkvI21EoncSdhzaBqow_xY_m9jUH9jjgs",
  authDomain: "green-trucks---welcome.firebaseapp.com",
  databaseURL: "https://green-trucks---welcome-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "green-trucks---welcome",
  storageBucket: "green-trucks---welcome.appspot.com",
  messagingSenderId: "39284275124",
  appId: "1:39284275124:web:1c6a6f9dd61272cf1864e1",
  measurementId: "G-2C5HDK7VFY"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
