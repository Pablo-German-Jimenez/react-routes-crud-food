import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css' 
import FooterBboyLinkinStyle from './components/FooterBboyLinkinStyle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   </StrictMode>,
)
