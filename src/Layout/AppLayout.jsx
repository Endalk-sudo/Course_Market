import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from "react-router-dom"

const AppLayout = () => {
  return (
    <section className='app-container'>
        <Navbar />

        <section className='app-content'>
            <Outlet />
        </section>
    </section>
  )
}

export default AppLayout