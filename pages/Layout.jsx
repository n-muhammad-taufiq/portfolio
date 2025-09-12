import React from 'react'
import Home from './Home'
import {Outlet,Link} from "react-router-dom";
const Layout = () => {
  return (
    <div className='flex flex-col gap-y-20 items-start min-h-screen'>

      <div className='flex w-full justify-around  bg-slate-100 py-5  '>
        <div className='cursor-pointer text-cyan-600 font-bold'>
          <Link to="/">Home</Link>
        </div>

        <div className='cursor-pointer font-bold'>
          <Link to="/aboutme">About Me</Link>
        </div>

        <div className='cursor-pointer font-bold'>
          <Link to="/projects">Projects</Link>
        </div>

        <div className='cursor-pointer font-bold'>
          <Link to="/hireme">Hire Me</Link>
        </div>
      </div>
    
      <Outlet></Outlet>

    </div>
  )
}

export default Layout
