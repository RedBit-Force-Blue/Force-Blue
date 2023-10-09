import React, { useState } from 'react';

function Profile() {
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
    <div className="profile">
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
    </div>
  );
}

export default Profile;
