import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokemonSingleImage, PokemonMultipleImages } from './Sandbox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonSingleImage />
    <PokemonMultipleImages />
  </StrictMode>,
)
