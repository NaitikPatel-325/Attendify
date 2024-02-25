import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './context/UserContextProvder.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <UserContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </UserContextProvider>
  </BrowserRouter>
)
