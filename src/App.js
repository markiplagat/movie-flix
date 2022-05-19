import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./components/MovieCard";

const API_URL = 'https://www.omdbapi.com?apikey=33af8d35';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Bat')
  }, []);
  return (
  <div className='app'>
    <h1>MovieFlix</h1>
    <div className='search'>
      <input placeholder='Search for movie' value={search} onChange={(e) => setSearch(e.target.value)} />
      <img src={SearchIcon} alt='search' onClick={() => searchMovies(search)} />
    </div>
    {movies.length > 0 ? (
      <div className='container'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    ) : (
      <div className="empty">
        <h2>No Movies Found</h2>
      </div>
    )}

  </div>
  );
}

export default App;
