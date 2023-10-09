import React, { useState } from 'react';
import './Profile.css';
import profile1 from '../../images/profile1.jpg';

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    usuario: 'Usuario',
    nombres: 'Nombres',
    apellidos: 'Apellidos',
    edad: 'Edad',
    email: 'Email',
    rol: 'Rol',
    telefono: 'Número de Teléfono',
    name: 'Nombre',
    profession: 'Profesión',
    location: 'Ubicación',
    profileImage: '/usuario.png',
  });

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData({
          ...profileData,
          profileImage: event.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };
  return (

    <>
      <div className='bodyProfile'>

        <div class="row py-5 px-2">
          <div class="col-xl-6 col-md-10 col-sm-10 mx-auto">


            <div class="bg-white shadow rounded overflow-hidden">
              <div class="px-4 bg-dark mb-5">

                <div class=" text-center profile-header">

                  <img src={profile1} alt="..." width="200" height="200" class="rounded mb-2 mx-auto" />
                  <button href="#" class="btn btn-dark">Edit profile</button>

                </div>
              </div>


              <div class="py-5 px-4">

                <div className="container text-center mt-5">

                  <div className='row mb-3'>

                    <div className='col-6'>
                      <h5 class="mb-3 fw-bold">Nombres</h5>
                      <input type="text" class="form-control" placeholder="Nombres" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className='col-6'>
                      <h5 class="mb-3 fw-bold">Apellidos</h5>
                      <input type="text" class="form-control" placeholder="Apellidos" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                  </div>

                  <div className='row mb-3'>

                    <div className='col-6'>
                      <h5 class="mb-3 fw-bold">Usuario</h5>
                      <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                    <div className='col-6'>
                      <h5 class="mb-3 fw-bold">Email</h5>
                      <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>

                  </div>

                  <div className='row mb-3'>
                    <div className='col-5'>
                      <h5 class="mb-3 fw-bold">Teléfono</h5>
                      <input type="text" class="form-control" placeholder="Teléfono" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className='col-4'>
                      <h5 class="mb-3 fw-bold">Edad</h5>
                      <input type="number" class="form-control" placeholder="Edad" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <div className='col-3'>
                      <h5 class="mb-3 fw-bold">Rol</h5>
                      <input type="text" class="form-control" placeholder="Rol" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                  </div>
                </div>

                <div class="py-4">

                  <h5 class="mb-4 ms-3 h1 fw-bold">My works</h5>

                  <div class="p-4 bg-secondary bg-opacity-25 rounded shadow-sm mb-2">

                    <h1 className='mb-3 h3 fw-bold'>Work Title</h1>

                    <p class="font-italic mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>

                    <ul class="list-inline small text-muted mt-3 mb-0">
                      <li class="list-inline-item">
                        <i class="fa fa-comment-o"></i>
                        2023/07/05
                      </li>
                      <li class="list-inline-item">
                        <i class="bi bi-star-fill text-warning" /><i class="bi bi-star-fill text-warning" /><i class="bi bi-star-fill text-warning" /><i class="bi bi-star-half text-warning" /><i class="bi bi-star text-warning" />
                      </li>
                    </ul>

                  </div>

                  <div class="p-4 bg-secondary bg-opacity-25 rounded shadow-sm mb-2">

                    <h1 className='mb-3 h3 fw-bold'>Work Title</h1>

                    <p class="font-italic mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>

                    <ul class="list-inline small text-muted mt-3 mb-0">
                      <li class="list-inline-item">
                        <i class="fa fa-comment-o"></i>
                        2022/04/12
                      </li>
                      <li class="list-inline-item">
                        <i class="bi bi-star-fill text-warning" /><i class="bi bi-star-fill text-warning" /><i class="bi bi-star text-warning" /><i class="bi bi-star text-warning" /><i class="bi bi-star text-warning" />
                      </li>
                    </ul>

                  </div>

                  <div class="p-4 bg-secondary bg-opacity-25 rounded shadow-sm">

                    <h1 className='mb-3 h3 fw-bold'>Work Title</h1>

                    <p class="font-italic mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>

                    <ul class="list-inline small text-muted mt-3 mb-0">
                      <li class="list-inline-item">
                        <i class="fa fa-comment-o"></i>
                        2022/01/04
                      </li>
                      <li class="list-inline-item">
                        <i class="bi bi-star-fill text-warning" /><i class="bi bi-star-fill text-warning" /><i class="bi bi-star-fill text-warning" /><i class="bi bi-star-fill text-warning" /><i class="bi bi-star text-warning" />
                      </li>
                    </ul>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

{/* <div className="profile">
      <img
        src={profileData.profileImage}
        alt="Foto de perfil"
        className="profile-image"
      />
      {isEditing ? (
        <div>

          <input
            type="text"
            name="usuario"
            value={isEditing ? profileData.usuario : `Usuario: ${profileData.usuario}`}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="nombres"
            value={isEditing ? profileData.nombres : `Nombres: ${profileData.nombres}`}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="apellidos"
            value={isEditing ? profileData.apellidos : `Apellidos: ${profileData.apellidos}`}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="edad"
            value={isEditing ? profileData.edad : `Edad: ${profileData.edad}`}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="email"
            value={isEditing ? profileData.email : `Email: ${profileData.email}`}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="rol"
            value={isEditing ? profileData.rol : `Rol: ${profileData.rol}`}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="telefono"
            value={isEditing ? profileData.telefono : `Teléfono: ${profileData.telefono}`}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div>
          <p>{profileData.usuario}</p>
          <p>{profileData.nombres}</p>
          <p>{profileData.apellidos}</p>
          <p>{profileData.edad}</p>
          <p>{profileData.email}</p>
          <p>{profileData.rol}</p>
          <p>{profileData.telefono}</p>
        </div>
      )}
      <button className="edit-button" onClick={toggleEditing}>
        {isEditing ? 'Guardar' : 'Editar'}
      </button>
    </div> */}


