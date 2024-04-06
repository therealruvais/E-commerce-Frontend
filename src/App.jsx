import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import SingleBlog from './pages/SingleBlog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import SingleProduct from './pages/SingleProduct'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/store' element={<OurStore />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path='/compare' element={<CompareProduct />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/resetp' element={<ResetPassword />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/shipping-policy' element={<ShippingPolicy />} />
        <Route path='/terms-conditions' element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App