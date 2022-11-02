import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import constants from "../../constants/constants";
import { useNavigate } from "react-router-dom";
const { ORANGE, URL } = constants;

export default function FormSeat({ session, selectedSeats }) {
  const [inputName, setInputName] = useState("");
  const [inputCpf, setInputCpf] = useState("");
  const navigate = useNavigate();

  function storageInformation() {
    let filteredSeats = session.seats.filter((seat) =>
      selectedSeats.includes(seat.id)
    );
    let tickets = filteredSeats.map((seat) => `Assento ${seat.name}`);

    return {
      movieAndSession: {
        title: session.movie.title,
        date: `${session.day.weekday} ${session.name}`,
      },
      tickets,
      customer: {
        name: inputName,
        cpf: inputCpf,
      },
    };
  }

  function reserveSeat(event) {
    event.preventDefault();

    if (selectedSeats.length === 0) {
      // check if user selected at least 1 seat
      return alert("Selecione um assento");
    }

    let objectToPost = {
      ids: selectedSeats,
      name: inputName,
      cpf: inputCpf.replace(".", "").replace("-", ""), // Just to make sure these characteres wont pass
    };

    let objectToSucessPage = storageInformation();

    axios
      .post(`${URL}/seats/book-many`, objectToPost)
      .then(() => navigate("/sucesso", { state: objectToSucessPage }))
      .catch((err) => console.log(err));
  }

  return (
    <ContainerForm>
      <Form onSubmit={reserveSeat}>
        <label htmlFor="name">Nome do comprador:</label>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Digite seu nome..."
          required
          data-identifier="buyer-name-input"
        />

        <label htmlFor="cpf">CPF do comprador (Digite 11 numeros):</label>
        <input
          type="text"
          pattern="\d{11}"
          value={inputCpf}
          onChange={(e) => setInputCpf(e.target.value)}
          placeholder="Digite seu CPF..."
          required
          data-identifier="buyer-cpf-input"
        />

        <button type="submit" data-identifier="reservation-btn">
          Reservar assento(s)
        </button>
      </Form>
    </ContainerForm>
  );
}

const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  font-family: "Roboto", sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  label {
    font-size: 18px;
    margin: 10px 0;
    width: 100%;
  }

  input {
    width: 100%;
    height: 51px;
    font-size: 20px;
    padding-left: 15px;
    margin-bottom: 10px;
  }

  input::placeholder {
    font-size: 18px;
    font-style: italic;
  }

  button {
    margin-top: 50px;
    width: 40%;
    height: 42px;
    background-color: ${ORANGE};
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 18px;
  }
`;
