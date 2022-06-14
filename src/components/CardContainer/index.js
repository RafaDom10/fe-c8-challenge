import { useSearchParams, Link } from "react-router-dom";
import { usePaginate } from '../../hooks/usePaginate';
import {
  Wrapper, GridContainer, ButtonContainer, ButtonPagination
} from "./styles";
import Card from "./Card";

function CardContainer() {

  const posterPath = 'https://image.tmdb.org/t/p/w500/';
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=pt-BR&`;

  const [searchParams] = useSearchParams();
  const { results, page, nextPage, prevPage } = usePaginate(URL, searchParams);

  return (
    <>
      <Wrapper>
        <GridContainer>
          {
            results.map(film => (
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
        <Link to={`?page=${prevPage}`}>
          <ButtonPagination disabled={page === 1} label='Página Anterior' />
        </Link>
        <p>{page}</p>
        <Link to={`?page=${nextPage}`}>
          <ButtonPagination label='Próxima Página' />
        </Link>
      </ButtonContainer>

    </>
  )
}

export default CardContainer;