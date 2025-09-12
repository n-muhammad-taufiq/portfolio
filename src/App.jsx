import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from 'react-router-dom';
import Layout from '../pages/layout';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import HireMe from '../pages/HireMe';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}/>
          <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/hireme" element={<HireMe></HireMe>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
