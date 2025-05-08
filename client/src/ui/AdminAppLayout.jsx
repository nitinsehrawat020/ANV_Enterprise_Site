import styled from "styled-components";
import NavBar from "../adminComponent/navbar/NavBar";
import Header from "../adminComponent/header/Header";
import Main from "../adminComponent/main/Main";

export const StyledAdminAppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 80px 1fr;
  //prettier-ignore
  grid-template-areas: 
  " navbar header"
  "navbar main"
  ;
  background: var(--color-background-500);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;

    grid-template-areas:
      "header"
      "main"
      "navbar";
  }
`;

function AdminAppLayout() {
  return (
    <StyledAdminAppLayout>
      <NavBar />
      <Header />
      <Main />
    </StyledAdminAppLayout>
  );
}

export default AdminAppLayout;
