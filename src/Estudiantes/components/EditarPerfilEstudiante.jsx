import React from "react";
import { useState, useEffect } from "react";



export const EditarPerfilEstudiante = () => {

  const [textDescripcion, setTextDescripcion] = useState('');
  const [actualizando, setActualizando] = useState(false)
  const [datoPersonales, setDatosPersonales] = useState({});
  const [imgLimit, setImgLimit] = useState([]);
  const [imagen, setImagen] = useState('');

  const num_cuenta = localStorage.getItem('id');

  const editarDescripcion = (event) => {
    setTextDescripcion(event.target.value)
  }
  useEffect(() => {
    const fetchEstudiante = async () => {
      try {
        const response = await fetch(`http://localhost:8081/estudiante/${num_cuenta}`);
        const datos = await response.json();
        setDatosPersonales(datos)
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchEstudiante();
  }, []);
  const actualizarDescripcion = async () => {
    try {
      setActualizando(true);
      const body = JSON.stringify({ descripcion: textDescripcion });
      const response = await fetch(`http://localhost:8081/estudiantesDescri/descripcion/${num_cuenta}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
      if (response.ok) {
        console.log('Descripción actualizada exitosamente');
      } else {
        throw new Error('Error en la solicitud de actualización');
      }
    } catch (error) {
      console.error('Error al actualizar la descripción:', error);
    } finally {
      setTimeout(() => {
        setActualizando(false);
      }, 1000)
    }
  };
  {/*Subir imagen*/ }
  const cargarImagen = (event) => {
    const file = event.target.files[0];
    setImagen(file);
  }
  const subirImagen = async () => {
    const formData = new FormData();
    formData.append('foto', imagen);
    formData.append('id_estudiante', num_cuenta);
    try {
      const response = await fetch('http://localhost:8081/cargarimagen', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        console.log('Imagen enviada exitosamente');
      } else {
        throw new Error('Error en la solicitud de envío');
      }
    } catch (error) {
      console.error('Error al enviar la imagen:', error);
    }
  };

  {/**Datos de pueba para controlar el numero de imagenes */ }
  const desabilitarBoton = imgLimit.length >= 3;
  useEffect(() => {
    const image = async () => {
      try {
        const response = await fetch(`http://localhost:8081/obtenerImagenes?id_estudiante=${num_cuenta}`);
        const jsonData = await response.json();
        setImgLimit(jsonData);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    image();
  }, [subirImagen]);

  {/*Borrar una imagen*/ }
 

  const imgX = async (id_) => {
    try {
      const body = JSON.stringify({ id: id_ });
      const response = await fetch(`http://localhost:8081/eliminarimagen`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
      if (response.ok) {
        console.log('Imagen eliminada');
      } else {
        throw new Error('Error en la solicitud de actualización');
      }
    } catch (error) {
      console.error('Error al actualizar la descripción:', error);
    } 
    

  };

  const handleEliminarImagen = async (id) => {
    await imgX(id);
    setImgLimit(imgLimit.filter((imagen) => imagen.id !== id));
  };
  return (
    <div style={{ paddingTop: '90px', height: '100vh', margin: '0px 10% 0px 10%' }}>

      {/* <div style={{ backgroundColor: 'white', width: '70%', height: '250px', marginLeft: '20px', flex: '0 0 auto' }}>
        <p>Nombre: {datoPersonales.primer_nombre}{' '}{datoPersonales.segundo_nombre}{' '}{datoPersonales.primer_apellido}{' '}{datoPersonales.segundo_apellido} </p>
        <p>Carrera: {datoPersonales.carrera}</p>
        <p>Número de cuenta: {datoPersonales.num_cuenta}</p>
        <p>Índice: {datoPersonales.indice}</p>
        <p>Correo Institucional: {datoPersonales.correo_institucional}</p>

      </div> */}
      {/*Actualización de la descripcion*/}
      <div style={{ position: 'relative' }}>
        {actualizando && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 'bold',
              zIndex: 1,
            }}
          >

            <span style={{ marginLeft: '10px' }}>Actualizando</span>
          </div>
        )}
        <textarea style={{ width: '100%', height: '100px', verticalAlign: 'top' }}
          placeholder="Escribe aquí tu nueva descripción"
          value={textDescripcion}
          onChange={editarDescripcion}
        ></textarea></div>
      <button className="btn btn-w btn-h btn-primary m-1"
        onClick={actualizarDescripcion}>Actualizar descripción</button>
      <hr />
      {/*borar imagenes*/}
      {imgLimit && imgLimit.length > 0 && imgLimit.map((datoImg) => (
        <div style={{ width: '200px', height: '200px', }} key={datoImg.id}>
          <img style={{ width: '150px', height: '150px' }} 
            src={datoImg.url}
            alt="Imagen"
          />
          <button onClick={() => handleEliminarImagen(datoImg.id)}>
            Borrar
          </button>
        </div>
      ))}

      <div>
        <input disabled={desabilitarBoton} type="file" accept="image/*" onChange={cargarImagen} />
        
        <button type="submit"
          onClick={() => subirImagen()}
          disabled={desabilitarBoton}
        >Subir imagen</button>
      </div>
    </div>

  )
}