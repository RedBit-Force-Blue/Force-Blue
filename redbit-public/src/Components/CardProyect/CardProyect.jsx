import React from 'react'
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react";
import './CardProyect.css'
import imagenCard from "../../images/bg-space.jpg"
import StarRating from '../StarsCard/StarCard';

export const CardProyect = ({imagen}) => {
  const rating = 5;
  return (
    <div className='col'>
      <div>
        <div className="card-container">
          <Card className="py-4">
            <CardHeader className="overflow-visible py-2 flex-col">

              <h4 className="title-card" >ARTEMIS II</h4>
              <img
                alt="Card background"
                className="object-cover rounded-xl"
                src={imagen}
                width={350}
              />
            </CardHeader>

            <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
              <div>
                <p className="body-title-card">Description</p>
                <small className="text-default-500" style={{ padding: '2px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tempore ut provident temporibus officiis. Incidunt temporibus repudiandae praesentium iure deserunt. Optio dolore eveniet, ea nisi libero nihil. Nihil facere, voluptatem, temporibus delectus ex hic natus sit ipsam, dolores nulla minima.</small>
              </div>

              <div>
                <p className="body-title-card">Owner</p>
                <h3>@mmogue</h3>
              </div>

              <div className='flex-col'>
                <p className="body-title-card">Collaborators</p>
                <h3>@jrealiquez | @jcalderon | @mhurtado</h3>
              </div>

              <div>
                <p className="uppercase font-bold"></p>
              </div>
            </CardBody>
            <CardFooter>
              <div className='flex-row'>
                <StarRating rating={rating} />
                <p className="rating-value">4.99</p>
              </div>
              <div style={{WebkitMarginStart:'50px'}}>3 comments</div>
            </CardFooter>
          </Card>
        </div>
      </div>

    </div>
  )
}