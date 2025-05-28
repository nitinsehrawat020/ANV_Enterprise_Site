import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
`;
export const LogoutContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background-800);
  padding: 2rem;
  border-radius: 8px;
  border: 8px solid var(--color-background-500);
  box-shadow: var(--shadow-md);
`;
export const LoginNavLink = styled(NavLink)`
  color: rgb(108, 158, 202);
  padding: 8px;
  margin-left: 6px;
  border-radius: 8px;
  text-decoration: underline;
  border: 3px solid var(--color-background-200);
  background-color: var(--color-background-800);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);
`;

export const DesignContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 2rem;

  h2 {
    width: 100%;
    background-color: var(--color-background-500);
    padding: 1rem;
    text-decoration: underline;
    border-radius: 8px 8px 0px 0px;
  }
`;
