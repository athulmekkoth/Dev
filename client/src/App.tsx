import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login.tsx'
import Homepage from './pages/Homepage.tsx'
import Singup from './components/Signup/Singup.tsx'
import { Navbar } from './components/Navbar/Navbar.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
   <Routes>
    <Route path='/' element={<Homepage/>} />
<Route path='/login' element={<Login/>} />
<Route path='/signup' element={<Singup/>} />


   </Routes>
    
    </>
   
  )
}

export default App


