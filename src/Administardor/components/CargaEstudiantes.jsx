import React, { useState } from 'react'
import { convertirCsvToJson } from '../helpers/convertirCsvToJson';


export const CargaEstudiantes = () => {


  const [msg, setMsg] = useState({})
  const [file, setFile] = useState()
  const [json, setJson] = useState([{}])

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Aquí puedes realizar acciones adicionales con el archivo, como validaciones
    if (file) {
      convertirCsvToJson(file)
        .then((jsonData) => {
          // Enviar jsonData al backend
          // console.log(jsonData);
          setJson(jsonData)
        })
    }

    // setFile(file); // Guardar el archivo en el estado de tu componente
  };

  const handleSubmit = () => {
    
    fetch('http://localhost:8081/registro/estudiante', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    })
      .then((response) => response.json())
      .then((data) => {
        // Procesar la respuesta del backend si es necesario
        setMsg(data)
        console.log(data);
      })
      .catch((error) => {
        console.error('Error al enviar los datos al backend:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Enviar</button>
      <p>{msg?.message}</p>
    </div>
  )
}