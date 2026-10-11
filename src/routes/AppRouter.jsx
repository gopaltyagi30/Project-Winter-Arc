import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Questions from '../pages/Questions'
import Landing from '../pages/landing'
import Experience from '../pages/Experience'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Main from '../pages/Main'
const AppRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/main" element={<Main/>}/>

      </Routes>
    
  )
}

export default AppRouter
