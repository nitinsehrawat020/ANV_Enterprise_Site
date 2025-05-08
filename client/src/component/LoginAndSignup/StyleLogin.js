import styled from "styled-components";
export const LoginSignupContainer = styled.div`
  width: 100%;
  max-width: 1200px;
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
  align-self: stretch;
  min-height: 536px;

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
  align-self: stretch;
  display: flex;
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

export const OverlayContainer = styled.div`
  align-self: stretch;
  width: 100vw;
  min-height: 600px;
  max-width: 590px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-background-400);
  padding: 1rem;

  position: absolute;
  z-index: 10;
  transform: ${(props) =>
    props.active ? "translate(300px, -0px)" : "translate(-270px, -0px)"};
  transition: transform 0.5s ease-in-out;
  transition-delay: 0.1s;
  border-radius: ${(props) =>
    props.active
      ? "0 var(--br-l) var(--br-l) 0"
      : " var(--br-l) 0 0 var(--br-l) "};

  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .image-container img {
    position: absolute;
    top: -150px;
    left: 100px;
    width: 90%;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }

  .image-container img.active {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    display: none;
    position: fixed;
    max-width: 612px;
    height: 535px;
    border-radius: 0 0 var(--br-l) var(--br-l);
    transform: translate(0px, -550px);

    ${(props) => props.active && "transform: translate(0px, -550px)"}

    .image-container img {
      display: none;
      width: 100%;
      top: 50px;
      left: 0;
    }
  }
`;

export const StyledFrom = styled.form`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 0.4rem;
  gap: 0.5rem;
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
    width: 80%;
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
      width: 80%;
    }
  }
`;
export const StyledInput = styled.input`
  width: 190px;
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
  width: 390px;
  padding: 0.4rem;
`} 
${(props) =>
    props.hi === "login" &&
    `
    width: 80%;
    padding: 1rem;
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
