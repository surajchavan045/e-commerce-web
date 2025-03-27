
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
