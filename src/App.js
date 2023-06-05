//Libraries
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//Components
import Listado from "./components/Listado";
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./components/Login";
import Detalle from "./components/Detalle";
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';

function App() {

  const [ favourites, setFavourites ] = useState([]);

  useEffect(() => {
      const favsInLocal = localStorage.getItem('favs');
      if (favsInLocal !== null) {
          const favsArray = JSON.parse(favsInLocal);
          setFavourites(favsArray);
      }
  }, [])

  const addOrRemoveFromFavs = e => {

    const favsMovies = localStorage.getItem('favs');

    let tempMoviesInFavs;

    if (favsMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favsMovies);
    }

    const btn = e.currentTarget;
    let parent = btn.parentElement;
    parent = parent.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const movieData = {
      imgURL, title, overview, id: btn.dataset.movieId
    }
    let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
      return oneMovie.id === movieData.id
    });
    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      setFavourites(tempMoviesInFavs);
    } else {
      let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
        return oneMovie.id !== movieData.id
      });
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      setFavourites(tempMoviesInFavs);
    }
  }

  return (
    <>
      <Header favourites={ favourites } />

      <div className='container mt-3 mb-5'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Listado' element={<Listado addOrRemoveFromFavs={ addOrRemoveFromFavs } />} />
          <Route path='/Detalle' element={<Detalle />} />
          <Route path='/Resultados' element={<Resultados />} />
          <Route path='/Favoritos' element={<Favoritos favourites={ favourites } addOrRemoveFromFavs={ addOrRemoveFromFavs } />} />
        </Routes>
      </div>
      
      <Footer/>
    </>
  );
}

export default App;
