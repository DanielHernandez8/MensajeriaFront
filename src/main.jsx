import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserProviver from './providers/UserProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProviver>
    <App />
    </UserProviver>
  </StrictMode>,
)
