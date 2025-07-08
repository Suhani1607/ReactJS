import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/Header/Header'
import  footer from './component/Footer/Footer'
import Home from './component/Home/Home'

function Layout() {
  return (
    <>
    <Header />
    <Outlet/>
    
    <Footer />

    </>
  )
}

export default Layout