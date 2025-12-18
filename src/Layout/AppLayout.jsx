import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom"

const AppLayout = ({ cartList }) => {
  return (
    <section className='app-container'>
      <Navbar cartList={cartList} />

      <section className='app-content'>
        <Outlet />
      </section>
    </section>
  )
}

export default AppLayout