import { Container } from "./styles";
import { Link } from "react-router-dom";

function Card({ name, date, poster, id }) {

  return (
    <Container>
      <Link to={`/details/${id}`}>
        <img src={poster} alt={'poster'} />
      </Link>
        <div>
          <p className="poster-name">{name}</p>
          <p className="poster-date">{date}</p>
        </div>
    </Container>
  )
}

export default Card;