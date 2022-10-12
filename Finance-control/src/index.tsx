import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

initializeApp({
  apiKey: 'AIzaSyBXmR5XCT1PdEcpfOgqWqIihOAd2LQ1j4Y',
  authDomain: 'finance-control-fcf09.firebaseapp.com',
  projectId: 'finance-control-fcf09',
  storageBucket: 'finance-control-fcf09.appspot.com',
  messagingSenderId: '1063052693998',
  appId: '1:1063052693998:web:1f3af3a9e05213f153beff',
  measurementId: 'G-MQ7CBG0X30'
})

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
)
