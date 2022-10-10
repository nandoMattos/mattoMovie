import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import LoadingGif from "../LoadingGif";
import MovieFooter from "../MovieFooter";
import SessionDateItem from "../SessionDateItem";
import constants from "../../constants";
import GoBackButton from "../GoBackButton";
const {DARK_GRAY, URL} = constants

export default function ScheduleMoviePage() {
    const {idFilme} = useParams();
    const [movieInfo, setmovieInfo] = useState({});

    useEffect(()=>{
        axios.get(`${URL}/movies/${idFilme}/showtimes`)
        .then((res)=>setmovieInfo(res.data))        
        .catch((err)=>console.log(err))
    },[idFilme])

    if(Object.keys(movieInfo).length === 0) {
        return <ScheduleList><LoadingGif/></ScheduleList>
    }

    return (
        <>
        <ScheduleList>
            <ContainerH1>
                <GoBackButton/>
                Selecione o horário
            </ContainerH1>

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
    align-items: center;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 140px;
    color: ${DARK_GRAY};

    ul {
        width: 100%;
    }
`

const ContainerH1 = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    font-size: 24px;
    position: relative;
    margin-bottom: 30px;
`