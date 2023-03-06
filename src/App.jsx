import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AuthenticationRoute from './routes/authentication/auth.route'
function App() {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthenticationRoute />} />
    </Routes>
  )
}

export default App
