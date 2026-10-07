import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Questions from '../pages/Questions'
import Landing from '../pages/Landing'
import Experience from '../pages/Experience'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
const AppRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    
  )
}

export default AppRouter
