import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import constants from "../constants"
const {ORANGE} = constants;

export default function GoBackButton() {
    const navigate = useNavigate();
    
    return (
        <ButtonStyle onClick={()=>navigate(-1)}>Voltar</ButtonStyle>
    )
};

const ButtonStyle = styled.button`
    background-color: ${ORANGE};
    width: 60px;
    height: 40px;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 17px;
    position: absolute;
    left: 20px;
    top: 20px
`