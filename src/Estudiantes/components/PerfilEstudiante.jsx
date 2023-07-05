import React from "react";
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
    <div style={{ paddingTop: '90px', height: '100vh', margin: '0px 10% 0px 10%' }}>

      {/* Contenedor */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Carrusel */}
        <div style={{ height: '250px', width: '30%', flex: '0 0 auto' }} id="carouselExample" className="carousel slide">
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
        <div style={{ backgroundColor: 'white', width: '70%', height: '250px', marginLeft: '20px', flex: '0 0 auto' }}>
          <p>Nombre: {imgPerfilEstudiante.primer_nombre}{' '}{imgPerfilEstudiante.segundo_nombre}{' '}{imgPerfilEstudiante.primer_apellido}{' '}{imgPerfilEstudiante.segundo_apellido} </p>
          <p>Carrera: {imgPerfilEstudiante.carrera}</p>
          <p>Número de cuenta: {imgPerfilEstudiante.num_cuenta}</p>
          <p>Índice Global: {imgPerfilEstudiante.indice}</p>
          <p>Correo Institucional: {imgPerfilEstudiante.correo_institucional}</p>

        </div>
      </div>

      {/* Descripción del estudiante */}
      <div style={{ marginTop: '10px', width: '100%', height: '300px', border: 'solid 1px' }}>
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

