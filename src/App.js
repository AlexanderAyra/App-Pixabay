import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'

const App = () => {

  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    
    const sonsultarAPI = async () => {

      if(busqueda === '') return

      const imagesPorPagina = 30
      const key = '18275283-6af94f0e1d9358cfaed0f745c'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagesPorPagina}`
      const respuesta = await fetch(url)
      const api = await respuesta.json()

      setBusqueda(api.hits)

    }
    sonsultarAPI()

  },[busqueda])

  return (
    <div className='container'>
      <div className="jumbotron">
        <p className='lead text-center'>
          Buscador de Imagenes
        </p>
        <Formulario
          setBusqueda={setBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
