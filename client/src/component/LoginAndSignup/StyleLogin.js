import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const LoginSignupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0rem;

  @media (max-width: 1024px) {
    width: 60%;
    flex-direction: column;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;
export const LoginContainer = styled.div`
  height: fit-content;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-background-800);
  padding: 1rem;
  border-radius: var(--br-l) 0 0 var(--br-l);
  gap: 0.5rem;
  @media (max-width: 1024px) {
    grid-area: content;

    border-radius: var(--br-l) var(--br-l) 0 0;
    display: ${(props) => (props.active ? "flex" : "none")};
  }
`;
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
    grid-area: content;

    display: ${(props) => (props.active ? "none" : "flex")};
    border-radius: 0 0 var(--br-l) var(--br-l);
  }
`;

export const StyledFrom = styled.form`
  /* width: min-content;
  height: min-content; */
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 0.4rem;
  gap: 1rem;
  p {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 40%;
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    flex-wrap: nowrap;
    p {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 80%;
      text-align: center;
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      width: 90%;
    }
  }
`;
export const StyledInput = styled.input`
  width: 190px;
  height: 40px;
  padding: 0.4rem;
  border: none;
  border-radius: 5px;
  background-color: var(--color-background-500);
  color: var(--color-white-500);
  font-size: 1rem;
  font-family: var(--font-roboto);

  ${(props) =>
    props.type === "submit" &&
    `
    width: 60%;
    background-color: var(--color-primary-500);
    color: var(--color-white-500);
    cursor: pointer;
  `}

  ${(props) =>
    props.id === "address" &&
    `
  width: 400px;
  
`} 
${(props) =>
    props.hi === "login" &&
    `
    width: 80%;
    padding: 1rem;
  `}
  ${(props) =>
    props.disabled &&
    `
    background-color: var(--color-primary-00);

  `}

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.4rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.8rem;
    padding: 0.4rem;

    ${(props) =>
      props.type === "submit" &&
      `
    width: 60%;
    background-color: var(--color-primary-500);
    color: var(--color-white-500);
    cursor: pointer;
  `}
  }
`;

export const Label = styled.label`
  color: var(--color-white-500);
  font-size: 1rem;
  font-family: var(--font-roboto);
  padding: 0.5rem;
`;

export const ForgotNavLink = styled(NavLink)`
  display: block;
  margin-right: auto;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 0.4rem;
  gap: 1rem;

  p {
    align-self: flex-end;
    margin-right: 50px;
  }
`;

export const EmailLabel = styled.label`
  color: var(--color-white-500);
  align-self: flex-start;
  margin-left: 40px;
  font-size: 1rem;
  font-family: var(--font-roboto);
  padding: 0.5rem;
`;

export const StyledOtpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 0.4rem;
  gap: 1rem;
  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border: 2px solid var(--color-background-400);
    border-radius: 5px;
  }
  span {
    width: 250px;
    text-align: center;
  }
  input {
    color: var(--color-white-50);
    font-size: 0.8rem;
  }
`;
