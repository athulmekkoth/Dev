import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login.tsx'
import Homepage from './pages/Homepage.tsx'
import Singup from './components/Signup/Singup.tsx'
import { Navbar } from './components/Navbar/Navbar.tsx'

import Footer from './components/Footer/Footer.tsx'
import BasicTabs from './pages/BasicTabs.tsx'
import ProfileContent from './pages/Profile.tsx'
function App() {
 

  return (
    <div className='parent'>
     <Navbar />
   <Routes>
    <Route path='/' element={<Homepage/>} />
<Route path='/login' element={<Login/>} />
<Route path='/signup' element={<Singup/>} />
<Route path="/profile" element={<ProfileContent />} />


   </Routes>
    <Footer />
    </div>
   
  )
}

export default App


