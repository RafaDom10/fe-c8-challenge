import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();

  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_KEY}&language=pt-BR`;

  useEffect(() => {
    fetch(URL).then(res => res.json()).then(data => {
      console.log(data)
    });
    
  }, [URL]);


  return (
    <h1>Details</h1>
  )
}

export default Details;