import "../../Assets/styles/styles-estudiantes/perfil-estudiante.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const PerfilEstudiante = () => {

  const [imgPerfilEstudiante, setImgPerfilEstudiante] = useState({});

  const num_cuenta = localStorage.getItem('id');

  useEffect(() => {
    const fetchEstudiante = async () => {
      try {
        const response = await fetch(`http://localhost:8081/estudiante/${num_cuenta}`);
        const imgPerfil = await response.json();
        setImgPerfilEstudiante(imgPerfil);

      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchEstudiante();
  }, []);


  {/**Datos de pueba */ }
  const [imagen, setImagen] = useState([]);

  useEffect(() => {
    const image = async () => {
      try {
        const response = await fetch(`http://localhost:8081/obtenerImagenes?id_estudiante=${num_cuenta}`);
        const jsonData = await response.json();
        setImagen(jsonData);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    image();
  }, []);


  return (
    <div className="d-flex flex-column container">

      {/* Contenedor */}
      <div className="d-flex row">
        {/* Carrusel */}
        <div  id="carouselExample" className="carousel slide border col">
          <div className="carousel-inner">
            {imagen.map((img,index) => (
              <div style={{ margin: '0px' }} key={img.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img style={{ width: '300px', height: '250px' }} src={img.url} className="" alt='...' />
              </div>
            ))
            }
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Próxima</span>
            </button>
          </div>
        </div>

        {/* Datos generales */}
        <div className="card1 col d-flex flex-column align-items-start justify-content-start">
          <p>Nombre: {imgPerfilEstudiante.primer_nombre}{' '}{imgPerfilEstudiante.segundo_nombre}{' '}{imgPerfilEstudiante.primer_apellido}{' '}{imgPerfilEstudiante.segundo_apellido} </p>
          <p>Carrera: {imgPerfilEstudiante.carrera}</p>
          <p>Número de cuenta: {imgPerfilEstudiante.num_cuenta}</p>
          <p>Índice Global: {imgPerfilEstudiante.indice}</p>
          <p>Correo Institucional: {imgPerfilEstudiante.correo_institucional}</p>

        </div>
      </div>

      {/* Descripción del estudiante */}
      <div className="card2 border-3">
        <h3>Descripción</h3>
        <p>
          {imgPerfilEstudiante.descripcion}
        </p>
      </div>

      <div style={{ marginTop: '10px' }}>
        <Link to='../EditarPerfilEstudiante'>
          <button className="btn btn-w btn-h btn-primary m-1">Editar Perfil</button>
        </Link>

      </div>
    </div>

  )
}

