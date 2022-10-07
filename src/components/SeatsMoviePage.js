import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import constants from "../constants"
const {URL} = constants;
 
export default function SeatsMoviePage() {
    const {idSessao} = useParams();
    
    useEffect(()=>{
        axios.get(`${URL}/showtimes/${idSessao}/seats`)
            .then((res)=>console.log(res.data))
            .catch((res)=>console.log(res.code))
    },[idSessao])

    return (
        <MainSeats>
            a
        </MainSeats>
    )
};

const MainSeats = styled.main`

`
