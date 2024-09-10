import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortfolioAlanGwynn } from './PortfolioAlanGwynn.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PortfolioAlanGwynn />
    </BrowserRouter>
  </StrictMode>,
)
