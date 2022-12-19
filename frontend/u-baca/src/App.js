import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login-component/login.component'
import SignUp from './components/signup-componet/signup.component'
import Home from './pages/Home';
import Profil from './pages/Profil';
import ReadPage from './pages/ReadPage';
import ReadPagePremium from './pages/ReadPagePremium'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/read-page/:id" element={<ReadPage />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/read-page-premium/:premiumid" element={<ReadPagePremium />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
export default App