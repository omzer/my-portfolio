import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Get the base URL from Vite's environment
const baseUrl = import.meta.env.BASE_URL || '/my-portfolio/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App baseUrl={baseUrl} />
  </React.StrictMode>,
)
