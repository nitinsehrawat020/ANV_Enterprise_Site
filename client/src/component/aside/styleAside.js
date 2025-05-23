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
    padding: 0.9rem;
    width: 50%;
    height: 40%;
    position: fixed;
    top: 3.7rem;
    right: 1.8rem;
    gap: 0.5rem;
    border-radius: 0px 0px 10px 10px;
    background-color: var(--color-background-800);
    color: var(--color-white-500);
    transition: all 1sec ease-in-out;
    z-index: 999;
    overflow: scroll;
  }

  &.ImCross {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    /* width: 100%; */
  }
`;

export const StyledList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  justify-content: space-evenly;
  list-style: none;
  font-size: 0.8rem;
  font-weight: 500;
  gap: 1rem;
  /* border: 1px solid var(--color-background-500); */
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-background-500);
  width: 100%;
  text-align: center;
  border-radius: 10px;
`;

export const ListLink = styled(Link)`
  width: 100%;
`;
