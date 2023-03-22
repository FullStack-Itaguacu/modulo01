import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContadorContextProvider } from './context/ContadorContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContadorContextProvider>
      <App />
    </ContadorContextProvider>
  </React.StrictMode>,
)
