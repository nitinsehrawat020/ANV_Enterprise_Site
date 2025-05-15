import styled from "styled-components";
import NavBar from "../component/navbar/NavBar";
import Footer from "../component/footer/Footer";
import Main from "../adminComponent/main/Main";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
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
        <Main />
        <Footer />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
