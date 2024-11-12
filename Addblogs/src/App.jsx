import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './component/Signup'
import Navbar from './component/Navbar'
import Main from './component/Main'
import Addblogs from './component/Addblogs'
import Blogs from './component/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<Routes>

  <Route path='/' element={<Login />} />

  <Route path='/signup' element={<Signup />} />
  <Route path='/blogs' element={<Main  child={<Blogs />}/>} />
  <Route path='/addblogs' element={<Main child={<Addblogs />} />} />
  
  
  


  </Routes>      
    </>
  )
}

export default App
