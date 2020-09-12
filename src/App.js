import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import ListaImagenes from './components/ListaImagenes'

const App = () => {

  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [paginaactual, setPaginaActual] = useState(1)
  const [totalpaginas, setTotalPaginas] = useState(6)

  useEffect(() => {
    
    const sonsultarAPI = async () => {

      if(busqueda === '') return

      const imagesPorPagina = 30
      const key = '18275283-6af94f0e1d9358cfaed0f745c'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagesPorPagina}`
      const respuesta = await fetch(url)
      const api = await respuesta.json()

      setImagenes(api.hits)

      const calcularTotalPaginas = Math.ceil(api.totalHits / imagesPorPagina)
      setTotalPaginas(calcularTotalPaginas)

    }
    sonsultarAPI()

  },[busqueda])

  const paginaAnterior = () => {
    const newPage = paginaactual - 1
    if(newPage === 0) return
    setPaginaActual(newPage);
  }

  const paginaSiguiente = () => {
    const newPage = paginaactual + 1
    if (newPage > totalpaginas) return    
    setPaginaActual(newPage)
  }

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
          <button
            type='button'
            className='bbtn btn-info mr-1'
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>

          <button
            type='button'
            className='bbtn btn-info'
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
      </div>
    </div>
  );
}

export default App;
