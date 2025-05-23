import styled from "styled-components";
import { device } from "../../Styles/Theme";

export const SignupContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-background-800);
  padding: 3rem;
  border-radius: 0 var(--br-l) var(--br-l) 0;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    border-radius: 0 0 var(--br-l) var(--br-l);
    /* width: 80%; */
  }
  @media ${device.tablet} {
    border-radius: 0 0 var(--br-l) var(--br-l);
    width: 50%;
    height: auto;
  }
`;

export const StyledSignupForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  flex-wrap: wrap;
`;

export const StyledGroup = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledLabel = styled.label``;

export const StyledInput = styled.div`
  width: 50px;
  height: 40px;
  padding: 0.4rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-background-500);
  color: var(--color-white-500);
  font-size: 1rem;
  font-family: var(--font-roboto);
`;
