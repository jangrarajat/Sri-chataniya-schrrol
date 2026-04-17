import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import MainNav from './components/MainNav'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Admission from './pages/Admission'
import Campus from './pages/Campus'
import Contact from './pages/Contect'
import Gallery from './pages/Gallery'
// import Results from './pages/Results'
import Team from './pages/Team'
import Branches from './pages/Branchts'
import QuickContactSidebar from './components/QuickContactSidebar'

export default function App() {
  return (
    <div>
      <QuickContactSidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/results" element={<Results />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/branches" element={<Branches/>} />
      </Routes>
    </div>
  )
}