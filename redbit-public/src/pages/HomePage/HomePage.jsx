import React from 'react'
import SideBarComponent from '../../Components/sideBar/SideBarComponent'
import { CardsList } from '../../Components/CardProyect/CardsList'
import './HomePage.css'

export const HomePage = () => {
  return (
    <>
    <SideBarComponent/>
    <div className='my-customHomePage'>
    <CardsList/>
    </div>
    </>
    )
}
