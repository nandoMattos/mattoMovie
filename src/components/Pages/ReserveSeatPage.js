import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import constants from "../../constants"
import FormContainer from "../FormSeat";
import MovieFooter from "../MovieFooter";
const {LIGHT_GRAY, GRAY, GREEN, YELLOW, URL} = constants;
 
export default function ReserveSeatPage() {
    const {idSessao} = useParams();

    const [session, setSession] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    
    useEffect(()=>{
        axios.get(`${URL}/showtimes/${idSessao}/seats`)
        .then((res)=>setSession(res.data))
        .catch((res)=>console.log(res.code))
    },[idSessao])

    if(Object.keys(session).length === 0 ){
        return <SessionMain>carregando...</SessionMain>
    }
    console.log(session)

    function toggleSelectSeat(seat) {
        if(!seat.isAvailable) return alert("Esse assento não está disponível") 

        if(selectedSeats.includes(seat.id)) {
            setSelectedSeats(selectedSeats.filter((id)=> id != seat.id))
        } else{
            setSelectedSeats([...selectedSeats, seat.id])
        }
    }

    function isSelected(idSeat) {
        if(selectedSeats.includes(idSeat))
            return GREEN
        return LIGHT_GRAY
    }

    return (
        <>
        <SessionMain>

            <H1Container><h1>Selecione o(s) assento(s)</h1></H1Container>

            <SeatsContainer>
                {session.seats.map((seat)=>
                    <Seat 
                        onClick={()=> toggleSelectSeat(seat)} 
                        status={seat.isAvailable ? isSelected(seat.id) : YELLOW}
                        // disabled={(!e.isAvailable)}
                        key={seat.id}
                    >
                        {(seat.name)}
                    </Seat>
                )}

                
                <SeatLegend>
                    <div>
                        <Seat status={GREEN}></Seat>
                        Selecionado
                    </div>

                    <div>
                        <Seat status={LIGHT_GRAY}></Seat>
                        Disponível
                    </div>

                    <div>
                        <Seat status={YELLOW}></Seat>
                        Indisponível
                    </div>
                </SeatLegend>
            </SeatsContainer>   

            <FormContainer selectedSeats={selectedSeats}/>

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
    font-family:'Roboto', sans-serif;
    color: ${GRAY};
    margin-bottom: 140px;
`

const H1Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    font-size: 24px;
    color: ${GRAY};
`

const SeatsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 85%;
`

const Seat = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: ${ ({status})=> status };
    border: 1px solid ${ ({status})=> status };
    margin: 10px;
    font-size: 13px;
    color:black;
`

const SeatLegend = styled.div`
    display: flex;
    justify-content: space-around;
    /* background-color: lightcoral; */
    width: 100%;
    div{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`