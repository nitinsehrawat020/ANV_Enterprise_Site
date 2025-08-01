import styled from "styled-components";

export const SettingContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background: var(--color-background-0);
  min-height: 100vh;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-grey-50);
    font-size: 2.5rem;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }
  }
`;

export const SettingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const SettingCard = styled.div`
  background: var(--color-background-100);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-background-300);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    border-color: var(--color-background-400);
  }

  h3 {
    margin-bottom: 1.5rem;
    color: var(--color-grey-50);
    font-size: 1.3rem;
    font-weight: 600;
    border-bottom: 2px solid var(--color-primary-500);
    padding-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const OperationButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.8rem;
  border: 2px solid
    ${(props) =>
      props.selected
        ? "var(--color-primary-500)"
        : "var(--color-background-300)"};
  background: ${(props) =>
    props.selected
      ? "var(--color-primary-500)"
      : "var(--color-background-200)"};
  color: ${(props) => (props.selected ? "white" : "var(--color-grey-100)")};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${(props) =>
      props.selected
        ? "var(--color-primary-600)"
        : "var(--color-background-300)"};
    border-color: var(--color-primary-500);
    color: ${(props) => (props.selected ? "white" : "var(--color-grey-50)")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const EntityButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.6rem;
  border: 1px solid
    ${(props) =>
      props.selected
        ? "var(--color-success-500)"
        : "var(--color-background-300)"};
  background: ${(props) =>
    props.selected
      ? "var(--color-success-500)"
      : "var(--color-background-200)"};
  color: ${(props) => (props.selected ? "white" : "var(--color-grey-100)")};
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: capitalize;

  &:hover {
    background: ${(props) =>
      props.selected
        ? "var(--color-success-600)"
        : "var(--color-background-300)"};
    border-color: var(--color-success-500);
    color: ${(props) => (props.selected ? "white" : "var(--color-grey-50)")};
  }
`;

export const ResetButton = styled.button`
  width: 100%;
  padding: 0.7rem;
  margin-top: 1rem;
  border: 1px solid var(--color-red-400);
  background: var(--color-background-200);
  color: var(--color-red-400);
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-red-500);
    color: white;
    border-color: var(--color-red-500);
  }
`;

export const SalaryCalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyleAddData = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: fit-content;
  background-color: var(--color-background-800);
  margin-top: 1rem;
  padding: 1rem;
  flex-direction: column;

  h3 {
    background-color: var(--color-background-400);
    padding: 8px;
    display: flex;
    align-self: flex-start;
    justify-content: start;
    border-radius: 8px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 12px;
`;
