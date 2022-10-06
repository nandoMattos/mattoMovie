import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import constants from "../constants";
import SessionDateItem from "./SessionDateItem";
const {GRAY, URL} = constants

export default function ScreenMovieSchedule() {
    const {idFilme} = useParams();
    const [movieInfo, setmovieInfo] = useState({});

    useEffect(()=>{
        axios.get(`${URL}/movies/${idFilme}/showtimes`)
            .then((res)=>{
                setmovieInfo(res.data)
            }
        )
    },[idFilme])

    if(Object.keys(movieInfo).length === 0) 
        return <MainSchedule>carregando...</MainSchedule>

    return (
        <MainSchedule>
            <HeaderH1>Selecione o horário</HeaderH1>

            {movieInfo.days.map((days)=>
                <ul>
                    <SessionDateItem movieSchedule={days}/>
                </ul>
            )}
        </MainSchedule>
    )
};

const MainSchedule = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;

    ul {
        width: 100%;
    }
`

const HeaderH1 = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    font-size: 24px;
    color: ${GRAY};
`