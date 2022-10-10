import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import LoadingGif from "../LoadingGif";
import MovieFooter from "../MovieFooter";
import Seats from "../Seats";
import SeatLegend from "../SeatLegend";
import FormSeat from "../FormSeat";
import constants from "../../constants";
import GoBackButton from "../GoBackButton";
const {URL, DARK_GRAY} = constants
 
export default function ReserveSeatPage() {
    const {idSessao} = useParams();

    const [session, setSession] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    useEffect(()=>{
        axios.get(`${URL}/showtimes/${idSessao}/seats`)
        .then((res)=>setSession(res.data))
        .catch((err)=>console.log(err.code))
    },[idSessao])

    if(Object.keys(session).length === 0 ){
        return <SessionMain><LoadingGif/></SessionMain>
    }

    return (
        <>
        <SessionMain>

            <H1Container>
                <GoBackButton/>
                <h1>Selecione o(s) assento(s)</h1>
            </H1Container>

            <SeatsContainer>
                <Seats seats={session.seats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
                <SeatLegend/>
            </SeatsContainer>

            <FormSeat session={session} selectedSeats={selectedSeats}/>

        </SessionMain>

        <MovieFooter
            name = {session.name}
            day ={session.day} 
            posterURL={session.movie.posterURL} 
            title={session.movie.title}
        />
        </>
    )
};

const SessionMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family:'Roboto', sans-serif;
    color: ${DARK_GRAY};
    margin-bottom: 140px;
`

const H1Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    font-size: 24px;
    position: relative;
    margin-bottom: 30px;
`

const SeatsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 85%;
`