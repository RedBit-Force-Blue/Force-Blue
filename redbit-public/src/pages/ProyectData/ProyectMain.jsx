import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'

export const ProyectMain = () => {
  return (
    <>
        <Outlet/>
        <Footer/>
    </>
  )
}