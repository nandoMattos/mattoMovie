import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import colors from "../colors"
const {GRAY} = colors;

export default function ScreenMoviesList() {
    const URL = "https://mock-api.driven.com.br/api/v8/cineflex"
    const [movies, setMovies] = useState([])
    
    useEffect(()=>{
        axios.get(`${URL}/movies`).then((res)=>{
            setMovies(res.data)
        });
    },[])

    if(movies.length === 0) return <MainScreen>carregando..</MainScreen>
    console.log(movies)

    return (
        <MainScreen>

            <HeaderH1>Selecione o filme</HeaderH1>

            <ul>
                {movies.map((e)=>
                    <li>
                        <img src={e.posterURL} alt="Poster image"/>
                    </li>
                )}
            </ul>
        </MainScreen>
    )
}

const MainScreen = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    
    ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 80%;
        /* background-color: lightcoral; */
    }

    li {
        padding: 0 10px;
        /* border: 1px solid black; */
        border-radius: 3px;
        margin: 10px 0;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }

    img {
        width: 140px;
        margin: 15px 0;
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