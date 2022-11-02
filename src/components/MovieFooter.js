import styled from "styled-components";
import constants from "../constants/constants";
const { DARK_GRAY, LIGHT_GRAY } = constants;

export default function MovieFooter({ posterURL, title, day, name }) {
  // in order to reuse this component its necessary validade this
  let weekday;
  if (day) {
    weekday = day.weekday;
  }

  return (
    <FooterStyle>
      <div data-identifier="movie-img-preview">
        <img src={posterURL} alt="Poster" />
      </div>

      <p data-identifier="movie-and-session-infos-preview">
        {title}
        {weekday && name && (
          <span>
            {weekday} - {name}
          </span>
        )}
      </p>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  position: fixed;
  bottom: 0;
  left: 0;
  font-family: "Roboto", sans-serif;
  background-color: ${LIGHT_GRAY};
  filter: brightness(110%);
  padding: 10px 0;

  div {
    width: fit-content;
    height: fit-content;
    padding: 8px;
    background-color: white;
    margin-left: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 50px;
  }

  p {
    color: ${DARK_GRAY};
    font-size: 26px;
    margin-left: 20px;
    line-height: 30px;
    span {
      display: block;
    }
  }
`;
