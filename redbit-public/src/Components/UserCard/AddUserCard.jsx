import React from 'react'
import './UserCard.css'
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import imagen1 from '../../images/addUser.png';
export const UserCard = () => {

    return (
        <div className='col'>
            <div>
                <div className="card-container">
                    <Card className="py-4">
                        <CardBody className="overflow-visible py-2 flex-col">
                            <img
                                alt="photo-user"
                                className="object-cover rounded-xl"
                                src={imagen1}
                                width={250}
                            />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>

    )
}
