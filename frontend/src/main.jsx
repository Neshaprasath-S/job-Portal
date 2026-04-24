import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/footer.jsx'
import Register from './Register'
import LoginPage from './LoginPage'
import JoblistPage from './JoblistPage'
import Apply from './Apply'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
   <App />
    </BrowserRouter>
    <Footer />
  </StrictMode>,
)
