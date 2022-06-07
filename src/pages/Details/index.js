 import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

 function Details() {
  const { id } = useParams();

    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c7b9ab4663cccc7843d3f69cf1569353&language=pt-BR`).then(response => {
        console.log(response);
      })
    }, [id]);

   return (
     <h1>Details</h1>
   )
 }

 export default Details;