import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import ListaImagenes from './components/ListaImagenes'

const App = () => {

  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
    
    const sonsultarAPI = async () => {

      if(busqueda === '') return

      const imagesPorPagina = 20
      const key = '18275283-6af94f0e1d9358cfaed0f745c'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagesPorPagina}`
      const respuesta = await fetch(url)
      const api = await respuesta.json()

      setImagenes(api.hits)

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
      <div className="row justify-content-center">
          <ListaImagenes
            imagenes={imagenes}
          />
      </div>
    </div>
  );
}

export default App;
