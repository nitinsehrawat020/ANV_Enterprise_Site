import { Outlet } from "react-router-dom";

import styled from "styled-components";
import NavBar from "../component/navbar/NavBar";
import Footer from "../component/footer/Footer";

const StyledAppLayout = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  //prettier-ignore
  grid-template-areas: 
  "navbar navbar"
  "main aside"
  "footer footer";
  background: var(--color-background-500);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <NavBar />
        <Outlet />
        <Footer />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
