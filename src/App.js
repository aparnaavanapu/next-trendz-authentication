import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LoginFormWrapper from './components/LoginFormWrapper'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

import './App.css'


const App = () => (
  <BrowserRouter>
    <Routes>
    <Route exact path="/login" element={<LoginFormWrapper/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
)

export default App