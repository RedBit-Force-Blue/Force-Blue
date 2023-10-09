import React from 'react';
import './MiComponente.css';

const MiComponente = () => {
  return (
    <div className="mi-componente">
      <h1>Título</h1>
      <p style={{ textAlign: 'left' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, temporibus. Quidem vitae velit illum. Vero cum reprehenderit temporibus sequi cupiditate adipisci, fugiat, repellendus, excepturi velit aliquam eaque eos nihil ad?
      </p>
      <br />
      <p style={{ textAlign: 'left' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas fugit voluptate at praesentium consectetur similique. Illum quia ipsa repellendus in, hic incidunt doloremque totam vitae, voluptas quis quo, veritatis architecto!
      </p>
      <br />
      <p style={{ textAlign: 'left' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas fugit voluptate at praesentium consectetur similique. Illum quia ipsa repellendus in, hic incidunt doloremque totam vitae, voluptas quis quo, veritatis architecto!
      </p>
      <br />
      <p style={{ textAlign: 'left' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas fugit voluptate at praesentium consectetur similique. Illum quia ipsa repellendus in, hic incidunt doloremque totam vitae, voluptas quis quo, veritatis architecto!
      </p>
      <div className="botones">
        <button>
          <div className="boton-contenido">
            <img src="apply.png" alt="Botón 1" width="40" height="40" />
            <span>Apply</span>
          </div>
        </button>
        <button>
          <div className="boton-contenido">
            <img src="question.png" alt="Botón 2" width="40" height="40" />
            <span>Apply</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MiComponente;
