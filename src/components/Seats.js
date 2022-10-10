import styled from "styled-components"
import constants from "../constants";
const {LIGHT_GRAY,GRAY, GREEN, DARK_GREEN, YELLOW, DARK_YELLOW} = constants;

export default function Seats({seats, selectedSeats, setSelectedSeats}) {


    function toggleSelectSeat(seat) {
        if(!seat.isAvailable) return alert("Esse assento não está disponível") 

        if(selectedSeats.includes(seat.id)) {
            setSelectedSeats(selectedSeats.filter((id)=> id !== seat.id))
        } else{
            setSelectedSeats([...selectedSeats, seat.id])
        }
    }

    function isSelected(idSeat) {
        if(selectedSeats.includes(idSeat))
            return GREEN
        return LIGHT_GRAY
    }

    function isSelectedBorder(idSeat) {
        if(selectedSeats.includes(idSeat))
            return DARK_GREEN
        return GRAY
    }

    function addZero(name) {
        if(name.length === 1) {
            return "0" + name;
        }
        return name;
    }

    return (
        <>
            {seats.map((seat)=>
                <Seat 
                    onClick={()=> toggleSelectSeat(seat)} 
                    status={seat.isAvailable ? isSelected(seat.id) : YELLOW}
                    border={seat.isAvailable ? isSelectedBorder(seat.id) : DARK_YELLOW}
                    // disabled={(!e.isAvailable)}
                    data-identifier="seat"
                    key={seat.id}
                >
                    {addZero(seat.name)}
                </Seat>
            )}
        </>
    )
};

const Seat = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: ${ ({status})=> status };
    border: 2px solid ${ ({border})=> border };
    margin: 10px;
    font-size: 13px;
    color:black;
`
