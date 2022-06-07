import { FilterContainer } from "./styles";
import { Button } from '../Button';
import { useEffect, useState } from 'react';
import axios from "axios";

function Nav() {

  const [ genres, setGenres ] = useState([]);

  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=c7b9ab4663cccc7843d3f69cf1569353&language=pt-BR`).then((response) => {
      setGenres(response.data.genres)
    })
 
  }, [])

  return (
    <FilterContainer>
      <div>
        <h1>
          Milhões de filmes, séries e pessoas  <br/>para descobrir. Explore já.
        </h1>
        <p>FILTRE POR:</p>
        <div>
          {
            genres.map(genre => (
              <Button key={genre.id} onClick={() => console.log(genre.id)}>
                {genre.name}
              </Button>
            ))
          }
        </div>
      </div>
    </FilterContainer>
  )
}

export default Nav;