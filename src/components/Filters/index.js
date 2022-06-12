import { FilterContainer } from "./styles";
import { Button } from '../Button';
import { useEffect, useState } from 'react';

function Filters() {

  const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_KEY}&language=pt-BR`;
  const [ genres, setGenres ] = useState([]);

  useEffect(() => {
    fetch(URL).then(res => res.json()).then(data => {
      setGenres(data.genres)
    });
 
  }, [URL])

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

export default Filters;