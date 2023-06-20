import React from 'react'
import ReactDOM from 'react-dom/client'
import { RegistroApp } from './RegistroApp.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RegistroApp />
    </BrowserRouter>
  </React.StrictMode>,
)
