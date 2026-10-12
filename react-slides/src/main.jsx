import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import SLIDES from './data/slides'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App slides={SLIDES} />
  </StrictMode>
)
