
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (typeof window !== 'undefined') {
  hydrateRoot(
    document.getElementById('root'),
    <StrictMode>
      <App />
    </StrictMode>
  )
}
