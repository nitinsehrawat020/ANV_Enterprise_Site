import styled from "styled-components";
export const StyleHeader = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: var(--color-background-200);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
  }
`;
export const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
