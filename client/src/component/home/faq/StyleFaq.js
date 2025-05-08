import styled from "styled-components";
export const StyledFaq = styled.article`
  width: 100%;
  max-width: 1200px;

  display: grid;
  grid-template-columns: 450px 500px;
  grid-template-rows: auto;
  /* grid-gap: 1rem; */
  justify-items: stretch;
  align-items: stretch;

  justify-content: center;

  padding: 10px 20px;
  color: var(--color-white-500);

  @media (max-width: 1024px) {
    grid-template-columns: 450fr;
    grid-template-rows: auto auto;
    justify-items: center;
  }
`;

//Get details from
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px, 10px, 10px, 0px;
  gap: 10px;
  background-color: var(--color-background-800);

  @media (max-width: 1024px) {
    padding: 30px 130px;
  }
  @media (max-width: 768px) {
    padding: 30px 70px;
  }
  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  p {
    font-size: 2rem;
    text-align: center;
  }
  input[type="tel"] {
    width: 242px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;

    background-color: var(--color-input);
    color: var(--color-white-500);
    &::placeholder {
      color: white;
    }
  }
  input[type="submit"] {
    width: fit-content;
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: var(--color-primary);
    color: var(--color-white-500);
    cursor: pointer;
  }
`;

//Get details from
export const StyledFaqContent = styled.div`
  display: flex;

  @media (max-width: 1024px) {
  }
`;

export const Bar = styled.div`
  display: none;
  height: 100%;
  background-color: var(--color-background-800);
  @media (max-width: 1024px) {
    display: flex;
    width: 50px;
  }

  @media (max-width: 768px) {
    display: flex;
    width: 42px;
  }
  @media (max-width: 480px) {
    display: flex;
    width: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0px;

  @media (max-width: 1024px) {
    padding: 0px 0px;
  }

  @media (max-width: 768px) {
    padding: 0px 0px;
  }
  @media (max-width: 480px) {
    padding: 10px 0px 0px 0px;
  }
`;

//Questions
export const StyledQuestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--color-background-800);

  border-radius: 0px 10px 10px 0px;
`;
export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 10px;
  width: 500px;
  border-bottom: 1px solid var(--color-black-500);

  @media (max-width: 1024px) {
    width: 450px;
  }

  @media (max-width: 768px) {
    width: 340px;
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    width: 262px;
  }
`;
export const Answer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  font-size: 0.8rem;
  padding: 10px;
  width: 500px;
  max-height: ${(props) => (props.show ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  @media (max-width: 1024px) {
    width: 450px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 340px;
  }
  @media (max-width: 480px) {
    width: 262px;
  }
`;
