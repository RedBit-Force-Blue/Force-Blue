import React from 'react'
import './UserCard.css'
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import imagen1 from '../../images/user1.jpg';
export const UserCard = () => {
    let name = "Joshua";
    let lastname = "Realiquez";
    let user = "jrealiquez";
    let position = "Collaborator";
    
    return (
        <div className='col'>
            <div>
                <div className="card-container">
                    <Card className="py-4">
                        <CardHeader className="overflow-visible py-2 flex-col">
                            <img
                                alt="photo-user"
                                className="object-cover rounded-xl"
                                src={imagen1}
                                width={250}
                            />
                        </CardHeader>

                        <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
                            <div>
                                <p className="font-semibold">{name} {lastname} <br/><small>@{user}</small></p>
                                
                            </div>
                        </CardBody>
                        <hr />
                        <CardFooter className='container-footer-card'>
                            
                            <p className='body-card'>{position}</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>

        </div>
    )
}
