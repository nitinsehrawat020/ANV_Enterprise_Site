import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleNavBarMenuItem = styled.li`
  display: flex;
  align-items: start;
  /* justify-content: space-between; */
`;

export const StyleNavBarLink = styled(NavLink)`
  width: 120px;
  display: flex;

  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 0.5rem;
  color: var(--color-white-500);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--color-background-200);
  cursor: pointer;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background-color: var(--color-primary-200);
  }

  &.active {
    background-color: var(--color-background-800);
    border: 2px solid var(--color-primary-700);
  }
  @media (max-width: 768px) {
    width: auto;
    gap: 0.2rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    font-size: 0.7rem;
    gap: 0.2rem;
  }
`;

const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    /* display: none; */
  }
`;

function AdminNavButton({ to, icon, text }) {
  return (
    <StyleNavBarMenuItem>
      <StyleNavBarLink to={to}>
        {icon}
        <P>{text}</P>
      </StyleNavBarLink>
    </StyleNavBarMenuItem>
  );
}

export default AdminNavButton;
