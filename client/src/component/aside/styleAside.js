import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAside = styled.div`
  grid-area: aside;
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.display === "false" ? "none" : "flex")};
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    gap: 2rem;
    border-radius: 0px 0px 10px 10px;
    background-color: var(--color-background-800);
    color: var(--color-white-500);
    transition: all 1sec ease-in-out;
    z-index: 999;
  }

  &.ImCross {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CloseButton = styled.div`
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  justify-content: space-evenly;

  list-style: none;
  font-size: 2rem;
  font-weight: 500;
  border: 1px solid var(--color-background-500);
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ListItem = styled.li`
  padding: 1rem 2rem;
`;

export const ListLink = styled(Link)``;
