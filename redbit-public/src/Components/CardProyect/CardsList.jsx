import React from 'react';
import { CardProyect } from './CardProyect';
import imagen1 from '../../../images/bg-space.jpg';
import imagen2 from '../../../images/bg-space-2.jpg';
import imagen3 from '../../../images/bg-space-3.jpg';
import imagen4 from '../../../images/bg-space-4.jpg';
import {Spacer} from "@nextui-org/react";


export const CardsList = () => {
  return (
    <div className='container mx-auto'>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <CardProyect imagen={imagen1}/>
        <CardProyect imagen={imagen2}/>
        <CardProyect imagen={imagen3}/>
        <CardProyect imagen={imagen4}/>
        <CardProyect imagen={imagen1}/>
        <CardProyect imagen={imagen2}/>
        <CardProyect imagen={imagen3}/>
        <CardProyect imagen={imagen4}/>
        <CardProyect imagen={imagen1}/>
        <CardProyect imagen={imagen2}/>
        <CardProyect imagen={imagen3}/>
        <CardProyect imagen={imagen4}/>
      </div>
    </div>
  );
};

