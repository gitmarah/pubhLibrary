import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LevelProvider } from './contextApi/Level.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LevelProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />}/>
        </Routes>
      </BrowserRouter>
    </LevelProvider>
  </StrictMode>,
)
