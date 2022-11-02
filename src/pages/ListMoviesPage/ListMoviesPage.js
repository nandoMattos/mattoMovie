import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import constants from "../../constants/constants";
import LoadingGif from "../../components/LoadingGif";
const { DARK_GRAY, URL } = constants;

export default function ListMoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/movies`)
      .then((res) => setMovies(res.data))
      .catch((res) => console.log(res.code));
  }, []);

  if (movies.length === 0) {
    return (
      <HomeScreen>
        <LoadingGif />
      </HomeScreen>
    );
  }

  return (
    <HomeScreen>
      <H1Container>Selecione o filme</H1Container>

      <ul>
        {movies.map((e) => (
          <Link to={`/sessoes/${e.id}`} key={e.id}>
            <li data-identifier="movie-outdoor">
              <img src={e.posterURL} alt="Poster" />
            </li>
          </Link>
        ))}
      </ul>
    </HomeScreen>
  );
}

const HomeScreen = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;

  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
  }

  ul li {
    padding: 0 10px;
    border-radius: 3px;
    margin: 10px 0;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  ul li img {
    width: 140px;
    margin: 15px 0;
  }
`;

const H1Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  font-size: 24px;
  color: ${DARK_GRAY};
`;
