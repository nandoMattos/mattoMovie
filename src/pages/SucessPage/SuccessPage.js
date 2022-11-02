import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import constants from "../../constants/constants";
import GoBackButton from "../../components/GoBackButton";
const { DARK_GRAY, GREEN, ORANGE } = constants;

export default function SuccessPage() {
  const previousPageInfo = useLocation();
  const { movieAndSession, tickets, customer } = previousPageInfo.state;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Confirmation>
      <H1Container>
        <GoBackButton />
        <h1>Pedido feito com sucesso!</h1>
      </H1Container>

      <MovieAndSession>
        <h2>Filme e sessão</h2>
        <p data-identifier="movie-session-infos-reserve-finished">
          {movieAndSession.title}
        </p>
        <p data-identifier="movie-session-infos-reserve-finished">
          {movieAndSession.date}
        </p>
      </MovieAndSession>

      <Tickes>
        <h2>Ingressos</h2>
        {tickets.map((number, i) => (
          <p data-identifier="seat-infos-reserve-finished" key={i}>
            {number}
          </p>
        ))}
      </Tickes>

      <Customer>
        <h2>Comprador</h2>
        <p data-identifier="buyer-infos-reserve-finished">
          Nome: {customer.name}
        </p>
        <p data-identifier="buyer-infos-reserve-finished">
          CPF: {customer.cpf}
        </p>
      </Customer>

      <ButtonHome
        onClick={() => navigate("/")}
        data-identifier="back-to-home-btn"
      >
        Voltar pra Home
      </ButtonHome>
    </Confirmation>
  );
}

const Confirmation = styled.main`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 100%;
`;

const H1Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  height: 120px;
  font-size: 24px;
  position: relative;
  margin-bottom: 10px;
  text-align: center;

  h1 {
    color: ${GREEN};
    font-size: 28px;
    font-weight: 700;
    filter: brightness(70%);
  }
`;

const SharedDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  margin: 20px;
  color: ${DARK_GRAY};
  line-height: 28px;
  h2 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 5px;
  }
  p {
    font-size: 22px;
  }
`;
const ButtonHome = styled.button`
  margin-top: 40px;
  width: 225px;
  height: 42px;
  background-color: ${ORANGE};
  border: none;
  color: white;
  font-size: 18px;
  border-radius: 4px;
`;

const MovieAndSession = styled(SharedDiv)``;
const Tickes = styled(SharedDiv)``;
const Customer = styled(SharedDiv)``;
