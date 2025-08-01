import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledUserMain = styled.div`
  grid-area: main;
  justify-self: stretch;
  align-self: stretch;
  background-color: var(--color-whitesmoke);
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px 120px;
  gap: var(--gap-64);
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 0px 20px;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0px 10px;
    gap: 1.5rem;
  }
`;

function UserMain() {
  return (
    <StyledUserMain>
      <Outlet />
    </StyledUserMain>
  );
}

export default UserMain;
