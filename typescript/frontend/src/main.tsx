import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, BrowserRouter, Route } from 'react-router'

import App from './App.tsx'
import Signup from './Signup.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
