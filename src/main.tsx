import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PasswordContextProvider } from './providers/passwordContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PasswordContextProvider>
      <App />
    </PasswordContextProvider>
  </React.StrictMode>,
)
