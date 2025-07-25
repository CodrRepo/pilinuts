import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import PHContextProviders from './context/PHContextProviders';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PHContextProviders>
      <App />
    </PHContextProviders>
  </BrowserRouter>
)
