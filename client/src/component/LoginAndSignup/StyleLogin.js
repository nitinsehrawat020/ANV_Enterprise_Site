import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../Styles/Theme";
export const LoginSignupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 5rem 0rem;
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
    border-radius: 0 0 var(--br-l) var(--br-l);
    /* width: 80%; */
  }
  @media ${device.tablet} {
    border-radius: 0 0 var(--br-l) var(--br-l);
    width: 80%;
    height: auto;
  }
`;

export const StyledFrom = styled.form`
  width: min-content;
  height: min-content;
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

    ${(props) => {
      props.type === "address" &&
        `
        width: 80%;
      `;
    }}
  }
  span {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  @media ${device.laptop} {
    /* width: 90%; */
  }

  @media ${device.tablet} {
    width: 100%;
    height: 100%;
    flex-direction: column;

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      text-align: start;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90%;
    }
  }

  @media ${device.mobile} {
    width: 90%;

    p {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      width: 90%;
      text-align: center;
    }
    span {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
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

    @media ${device.tablet}{
  width: 190px;

    }
  
`} 
${(props) =>
    props.hi === "login" &&
    `
    width: 60%;
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
    /* width: 100%; */
    padding: 0.4rem;

    ${(props) =>
      props.hi === "login" &&
      `
    width: 90%;
    padding: 1rem;
  `}
  }

  @media (max-width: 480px) {
    /* width: 100%; */
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
  }
  @media ${device.tablet} {
    padding: 5rem;
    width: 400px;
    border-radius: var(--br-l) var(--br-l) 0 0;
    input {
      width: 200px;
    }
    ${(props) =>
      props.type === "submit" &&
      `
    width: 450px;
    background-color: var(--color-primary-500);
    color: var(--color-white-500);
    cursor: pointer;
  `}
  }
  @media ${device.mobile} {
    grid-area: content;
    padding: 2rem;
    width: 300px;
    border-radius: var(--br-l) var(--br-l) 0 0;
  }
`;

export const ForgotNavLink = styled(NavLink)`
  display: block;
  text-align: right;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 0.4rem;
  gap: 1rem;
  color: #fbebaa;

  p {
    align-self: flex-end;
    margin-right: 100px;
  }

  @media ${device.tablet} {
    p {
      margin-right: 140px;
    }
  }
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
    width: 150px;
    text-align: center;
  }
  input {
    color: var(--color-white-50);
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    p {
      flex-direction: column;
      gap: 0.8rem;
      justify-content: start;
      align-items: start;
      padding: 0.6rem;
    }
    span {
      text-align: start;
    }
  }
`;

export const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-background-800);
  padding: 5rem 1rem;
  border-radius: var(--br-l);
  gap: 0.5rem;
  @media (max-width: 1024px) {
    border-radius: var(--br-l) var(--br-l);
  }
  @media ${device.tablet} {
    padding: 4rem 1rem;
    width: 400px;

    h2 {
      font-size: 1.4rem;
      text-align: center;
    }
  }
  @media ${device.mobile} {
    width: 300px;
    padding: 2rem;

    input {
      width: 150px;
    }
  }
`;

export const StyledForgotPasswordForm = styled.form`
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
    justify-content: start;
    align-items: start;
  }

  input {
    color: var(--color-white-50);
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    width: 350px;
  }
`;

export const EmailLabel = styled.label`
  color: var(--color-white-500);

  align-self: flex-start;

  font-size: 1rem;
  font-family: var(--font-roboto);
  padding: 0.5rem;
`;
