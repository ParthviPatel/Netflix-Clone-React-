import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setmovies] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(fetchUrl);
        console.log(request.data.results);
        setmovies(request.data.results);
        return request;
      }
      fetchData();
    }, [fetchUrl])
    
  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row__posters"> 
          {/* row_posters */}
          {movies.map(movie => (
            <img key={movie.id} className={`row__poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
          ))}
        </div>
      {/*containers -> posters*/}
    </div>
  )
}

export default Row
