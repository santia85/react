import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layouts/Layout.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <StrictMode>
<Layout>
    <App />
</Layout>
  </StrictMode>,
  </BrowserRouter>

)