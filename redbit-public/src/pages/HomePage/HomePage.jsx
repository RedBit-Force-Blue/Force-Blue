import React from 'react'
import backgroundImage1 from '../../images/space2.jpg'
import './HomePage.css'

export const HomePage = () => {
  return (
    <>

      <section>

        <div className='bg-image' style={{
          backgroundImage: `url(${backgroundImage1})`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>

          <div data-aos="fade-up" className="container d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: 'rgba(0,0,0,0.20)' }}>

            <h1 className="text-center text-white display-1 fontConsolaMono">BIENVENIDO A REDBIT</h1>

          </div>

        </div>

        <div className="position-relative overflow-hidden p-md-5 text-center">

          <div className="container col-md-7 p-lg-5 mx-auto mb-5 mt-lg-0 mt-5">
            <h1 className="mx-4 display-4  pb-4 fontConsolaMono" style={{ color: 'black', letterSpacing: '4px' }}>QUE ES REDBIT</h1>
            <p className="lead fw-normal fontConsolaMono" style={{ textAlign: 'center', color: 'black' }}>
              Marketplace para proyectos de código abierto (open source) que conecta 
              a personas interasadas con proyectos y propuestas alineadas con sus 
              intereses y popularidad en la comunidad.
            </p>
            <a className="btn btn-outline-light" data-mdb-ripple-color="light" href="pages/aboutus.html">Conocer Mas</a>
          </div>

          <div className="custom-shape-divider-bottom-1696794379">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>

        </div>

      </section>

      <footer style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
        <div className="text-white text-center p-4">
          © 2023 Copyright:
          <a className="text-white fw-bold" href="#"> www.redbit.com</a>
        </div>
      </footer>

    </>
  )
}
