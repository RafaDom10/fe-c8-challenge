import Card from "./Card";
import { useState, useEffect } from "react";
import { Wrapper, GridContainer, MainCardContainer, ButtonContainer, ButtonPagination } from "./styles";
import axios from "axios";

function CardContainer() {

  const [popularFilms, setPopularFilms] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const posterPath = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c7b9ab4663cccc7843d3f69cf1569353&language=pt-BR&page=${activePage}`).then(response => {
      setPopularFilms(response.data.results)
    })
  }, [activePage])

  const nextPage = () => {
    setActivePage(prevState => prevState + 1)
  }

  const previousPage = () => {
    if (activePage === 1) {
      return;
    }

    setActivePage(prevState => prevState - 1);
  }

  return (
    <MainCardContainer>
      <Wrapper>
        <GridContainer>
          {
            popularFilms.map(film => (
              <Card
                key={film.id}
                id={film.id}
                date={film.release_date}
                name={film.original_title}
                poster={`${posterPath}${film.poster_path}`}
              />
            ))
          }
        </GridContainer>
      </Wrapper>

      <ButtonContainer>
        <ButtonPagination onClick={previousPage}>Página Anterior</ButtonPagination>
        <p>{activePage}</p>
        <ButtonPagination onClick={nextPage}>Próxima Página </ButtonPagination>
      </ButtonContainer>

    </MainCardContainer>
  )
}

export default CardContainer;