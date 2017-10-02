import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyCT73K3bjVkWlr_PpKv3RkKbuWeF7M30HY",
    authDomain: "curso-react-973ad.firebaseapp.com",
    databaseURL: "https://curso-react-973ad.firebaseio.com",
    projectId: "curso-react-973ad",
    storageBucket: "",
    messagingSenderId: "407989473274"
});

import App from './components/App'





render(<App />, document.getElementById('root'))