import styled from "styled-components";
import constants from "../../constants/constants";
const { GREEN, DARK_GREEN, LIGHT_GRAY, GRAY, YELLOW, DARK_YELLOW } = constants;

export default function SeatLegend() {
  return (
    <Legend>
      <div>
        <SeatStatus
          status={GREEN}
          border={DARK_GREEN}
          data-identifier="seat-selected-subtitle"
        />
        Selecionado
      </div>

      <div>
        <SeatStatus
          status={LIGHT_GRAY}
          border={GRAY}
          data-identifier="seat-available-subtitle"
        />
        Disponível
      </div>

      <div>
        <SeatStatus
          status={YELLOW}
          border={DARK_YELLOW}
          data-identifier="seat-unavailable-subtitle"
        />
        Indisponível
      </div>
    </Legend>
  );
}

const Legend = styled.div`
  display: flex;
  justify-content: space-around;
  /* background-color: lightcoral; */
  width: 100%;
  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const SeatStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 12px;
  background-color: ${({ status }) => status};
  border: 2px solid ${({ border }) => border};
  margin: 10px;
  font-size: 13px;
  color: black;
`;
