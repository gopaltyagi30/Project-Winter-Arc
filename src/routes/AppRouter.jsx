import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Questions from '../pages/Questions'
import Landing from '../pages/landing'
const AppRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/questions" element={<Questions/>}/>
      </Routes>
    
  )
}

export default AppRouter
