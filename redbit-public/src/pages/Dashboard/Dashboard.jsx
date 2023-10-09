import React from 'react'
import SideBarComponent from '../../Components/sideBar/SideBarComponent'
import { CardsList } from '../../Components/CardProyect/CardsList'
import './DashBoard.css'
export const Dashboard = () => {
  return (
    <>
     <SideBarComponent/>
    <div className='my-customHomePage'>
    <CardsList/>
    </div>

    </>
  )
}
