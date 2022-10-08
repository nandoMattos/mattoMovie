import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import constants from "../../constants";
import MovieFooter from "../MovieFooter";
import SessionDateItem from "../SessionDateItem";
const {GRAY, URL} = constants

export default function ScheduleMoviePage() {
    const {idFilme} = useParams();
    const [movieInfo, setmovieInfo] = useState({});
    console.log(movieInfo)
    useEffect(()=>{
        axios.get(`${URL}/movies/${idFilme}/showtimes`)
            .then((res)=>{
                setmovieInfo(res.data)
            }
        )
    },[idFilme])

    if(Object.keys(movieInfo).length === 0) {
        return <ScheduleList>carregando...</ScheduleList>
    }

    return (
        <>
        <ScheduleList>
            <ContainerH1>Selecione o horário</ContainerH1>

            {movieInfo.days.map((day)=>
                <ul key={day.id}>
                    <SessionDateItem movieSchedule={day}/>
                </ul>
            )}
        </ScheduleList>

        <MovieFooter posterURL={movieInfo.posterURL} title={movieInfo.title}/>
        </>
    )
};

const ScheduleList = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 140px;

    ul {
        width: 100%;
    }
`

const ContainerH1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    font-size: 24px;
    color: ${GRAY};
`