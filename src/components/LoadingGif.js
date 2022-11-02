import styled from "styled-components";
import constants from "../constants/constants";
const { LOADING_GIF } = constants;

export default function LoadingGif() {
  return (
    <Div>
      <img src={LOADING_GIF} alt="loading gif" />
    </Div>
  );
}

const Div = styled.div`
  margin-top: 100px;

  img {
    width: 300px;
  }
`;
