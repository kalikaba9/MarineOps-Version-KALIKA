
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './pages/Header'
import Apropos from './pages/Apropos'
import Services from './pages/Services'
import Contact from './Composants/Contact'
import Panier from './pages/Panier'
import Commandes from './pages/Commandes'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header/>  } />
    <Route path="/apropos" element={<Apropos/> } />
    <Route path="/services" element={<Services/> } />
    <Route path="/contact" element={<Contact/> } />
    <Route path="/panier" element={<Panier/> } />
    <Route path="/commandes" element={<Commandes/> } />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
