import { useState } from 'react'

import './App.css'
import Register from './Register'
import LoginPage from './LoginPage'
import JoblistPage from './JoblistPage'
import Apply from './Apply'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<JoblistPage/>}/>
      <Route path='/apply/:jobId' element={<Apply/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
