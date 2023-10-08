import React from 'react'
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import addUser from '../../images/addUser.png'
import { UserList } from './../../Components/UserCard/UserList';
import {CommentCard} from './../../Components/CommentCard/CommentCard';
import imagenback from './../../images/addUser.png'
export const ProyectData = () => {
    return (
        <div style={{ padding: '300px' }}>
            <div className='headerProyect'>
                <div>
                    <Button color="warning">
                        back
                    </Button>
                </div>
                <div style={{ maxWidth: '350px' }}>
                    <h1 className='font-semibold'>SUN</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero aperiam nulla corrupti architecto assumenda esse cumque debitis ullam, reprehenderit qui atque non tempore. Officia blanditiis eligendi ea quo quia.</p>
                </div>
                <div>
                    <p>#Sun #Science #EARTH</p>
                </div>
            </div>
            <div>
                <div>
                    <div className="flex gap-4 items-center">
                        <Avatar src={addUser} size="md" />
                    </div>
                </div>
                <div>
                    <h2 className='font-semibold'>OverView</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quos cum minima pariatur nesciunt enim soluta iusto exercitationem porro expedita reiciendis veritatis eaque voluptatem delectus, vitae ut est laudantium labore, ipsa velit, et sint fugiat? Officiis vitae atque voluptatem ipsam magni, explicabo sit fuga earum ducimus esse facilis ab consequatur!</p>
                </div>
            </div>

            <div style={{ display: '-webkit-flex', flexDirection: 'row', background: '#fff' }}>
                
            </div>

            <div>
                <h1 className='font-semibold'>Description</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint repellendus ipsa, fuga illo quod amet saepe numquam sequi delectus atque ea veritatis ratione expedita maiores minima qui! Porro suscipit tempore, nihil placeat hic odit accusantium doloremque voluptatem doloribus repellendus eius ab facilis. Atque ea vero totam praesentium beatae et dolor, nihil qui? Architecto iusto reiciendis laudantium enim ea, pariatur eveniet.</p>

            </div>

            <div>
                <h2 className='font-semibold'>Our Team</h2>
                <UserList/>
            </div>

            <div>
                <h2 className='font-semibold'>Coments</h2>
                <CommentCard/><CommentCard/>
            </div>
        </div>
    )
}
