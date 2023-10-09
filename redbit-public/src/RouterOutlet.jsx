import React from 'react'
import {Outlet} from 'react-router-dom'
import ComponentNavBar from './Components/NavBar.jsx/ComponentNavBar'
import "react-chat-elements/dist/main.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

export const RouterOutlet = () => {
  return (
    <>
      <ComponentNavBar/>
        <Outlet/>
    </> 
 )
}
