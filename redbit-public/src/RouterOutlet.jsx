import React from 'react'
import {Outlet} from 'react-router-dom'
import ComponentNavBar from './Components/NavBar.jsx/ComponentNavBar'

export const RouterOutlet = () => {
  return (
    <>
    <ComponentNavBar/>
        <Outlet/>
    </> 
 )
}
