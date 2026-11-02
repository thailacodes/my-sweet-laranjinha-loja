import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { CarrinhoProvider } from './contexts/CarrinhoContext.jsx'

// O Provider envolve toda a SPA para que Header, páginas e checkout compartilhem o carrinho.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </StrictMode>,
)
