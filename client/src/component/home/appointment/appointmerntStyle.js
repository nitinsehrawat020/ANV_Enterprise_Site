import styled from "styled-components";
import { device } from "../../../Styles/Theme";

export const StyledAppointment = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppointmentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;

  flex-direction: column;
  align-items: center;
  gap: 1rem;
  align-self: center;
  padding: 1rem;
`;

export const Title = styled.div`
  display: flex;
  padding: 0px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: var(--color-white-500);
`;
export const BoxConatiner = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(4, 250px);
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  grid-gap: 0.5rem;

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 250px);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 250px);
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(1, 250px);
  }
`;

export const StyledBox = styled.div`
  display: flex;
  width: 250px;
  height: 200px;
  padding: 5px 20px;
  background: #363732;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 19px;
  color: #fff;
  text-align: center;

  span {
    font-size: 0.8rem;
  }

  @media ${device.laptop} {
    padding: 15px;
  }
  @media ${device.mobile} {
  }
  @media ${device.mobile} {
  }
`;
export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-self: stretch;
  text-align: center;

  p {
    color: inherit;
    font-weight: 700;
    font-size: 1rem;
  }
`;
