import React from 'react';
import { CardProyect } from './CardProyect';




export const CardsList = () => {
  return (
    <div className='container mx-auto'>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <CardProyect imagen={'https://images-assets.nasa.gov/image/Artemis%20Logo%20Black%20RGB-July%202021/Artemis%20Logo%20Black%20RGB-July%202021~medium.jpg'} nameProject={'artemisII'}/>
        <CardProyect imagen={'https://images-assets.nasa.gov/image/PIA01544/PIA01544~orig.jpg'} nameProject={'VENUS'}/>
        <CardProyect imagen={'https://live.staticflickr.com/65535/53222831637_d09daed8b0_z.jpg'} nameProject={'Human in Space'}/>
        <CardProyect imagen={'https://images-assets.nasa.gov/image/KSC-20181201-PH_RKL01_0013/KSC-20181201-PH_RKL01_0013~medium.jpg'} nameProject={'NASA-Aircraft'}/>
        <CardProyect imagen={'https://smd-cms.nasa.gov/wp-content/uploads/2023/06/may102022-x1pt5flare-171-131-304-jpg.webp'}/>
        <CardProyect imagen={'https://images-assets.nasa.gov/image/PIA00008/PIA00008~medium.jpg'}nameProject={'Explopanets'}/>
        <CardProyect imagen={'https://images-assets.nasa.gov/image/ACD16-0170-014/ACD16-0170-014~medium.jpg'} nameProject={'DRONRES AND YOU'}/>
        <CardProyect imagen={'https://images-assets.nasa.gov/image/201206150006HQ/201206150006HQ~medium.jpg'} nameProject={'ROBOTICS'}/>
        <CardProyect imagen={'https://images-assets.nasa.gov/image/KSC-2009-5140/KSC-2009-5140~medium.jpg'} nameProject={'NASA EDUCATION'}/>

      </div>
    </div>
  );
};

