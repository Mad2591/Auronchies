import './App.css'
import Layout from './components/layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import About from './pages/about'
import Contact from './pages/contact'
import Login from './pages/login'
import Cart from './pages/cart'
import Wishlist from './pages/wishlist'
import Shopcontext from './components/shopcontext'
import Signup from './pages/signup'
import Details from './pages/details'
import Checkout from './pages/checkout'
import ForgotPassword from './pages/forgotpasword'
import { useEffect, useState } from 'react'
function App() {
  return (
    <>
      <Shopcontext>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='blog' element={<Blog />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />       
        <Route path='signup' element={<Signup/>}/>
        <Route path='cart' element={<Cart />} />
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='details' element={<Details/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='forgotpassword' element={<ForgotPassword/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </Shopcontext>
    </>
  )
}

export default App
