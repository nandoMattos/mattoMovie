import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import constants from "../constants"
const {ORANGE, URL} = constants

export default function FormSeat({selectedSeats}) {
    const [inputName, setInputName] = useState("")
    const [inputCpf, setInputCpf] = useState("")

    function reserveSeat(event) {
        event.preventDefault();
        
        // check if user selected at least 1 seat
        if(selectedSeats.length === 0 ) return alert("Selecione um assento")

        let postObject = {
            ids: selectedSeats,
            name: inputName,
            cpf: inputCpf.replace('.', '').replace('-','')  // Just to make sure these characteres wont pass
        }

        axios.post(`${URL}/seats/book-many`, postObject)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    return(
        <ContainerForm>
            <Form onSubmit={reserveSeat}>
                <label htmlFor="name">Nome do comprador:</label>
                <input 
                    type="text" 
                    value={inputName} 
                    onChange={e => setInputName(e.target.value)} 
                    placeholder="Digite seu nome..." 
                    required
                />

                <label htmlFor="cpf">CPF do comprador:</label>
                <input 
                    type="number"
                    minLength={11}
                    value={inputCpf} 
                    onChange={e => setInputCpf(e.target.value)} 
                    placeholder="Digite seu CPF..." 
                    required
                />

                <button type="submit">Reservar assento(s)</button>
            </Form>
        </ContainerForm>

    )
};

const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    font-family: 'Roboto', sans-serif   ;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;

    label{
        font-size: 18px;
        margin: 10px 0;
    }

    input {
        width: 100%;
        height: 51px;
        font-size: 20px;
        padding-left: 15px;
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
`