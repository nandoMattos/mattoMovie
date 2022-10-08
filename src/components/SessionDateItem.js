import { Link } from "react-router-dom";
import styled from "styled-components"
import constants from "../constants";
const {ORANGE, GRAY} = constants;

export default function SessionDateItem({movieSchedule}) {
    const {weekday, date, showtimes} = movieSchedule;

    return(
        <ContainerSchedule>
            <h1>{weekday} - {date}</h1>


            <ContainerTime>
                {showtimes.map((e)=>
                    <DivTime key={e.id}>
                        <Link to={`/assentos/${e.id}`}>
                            <p >{e.name}</p>
                        </Link>
                    </DivTime>
                )} 
            </ContainerTime>

        </ContainerSchedule>
    )
};

const ContainerSchedule = styled.li`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 90%;
    margin: 0 auto;
    margin: 15px 0 15px 30px;
    color: ${GRAY};

    a{
        text-decoration: none;
    }

    h1 {
        margin-left: 10px;
        font-size: 20px;
    }
`
const ContainerTime = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const DivTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 43px;
    color: white;
    font-size: 18px;
    background-color: ${ORANGE};
    border-radius: 3px;
    margin: 10px;

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 43px;
        border-radius: 3px;
    }
`