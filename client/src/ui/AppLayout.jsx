import styled from "styled-components";
import NavBar from "../component/navbar/NavBar";
import UserMain from "../component/userMain/UserMain";
import Footer from "../component/footer/Footer";
import UserStyle from "../Styles/UserStyle";

const StyledAppLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  //prettier-ignore
  grid-template-areas: 
  "navbar "
  "main "
  "footer ";
  background: var(--color-whitesmoke);
  overflow-x: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "navbar"
      "main"
      "footer";
    gap: 1rem;
    min-height: 100vh;
    height: auto;
  }
`;

function AppLayout() {
  return (
    <>
      <UserStyle />
      <StyledAppLayout>
        <NavBar />
        <UserMain />
        <Footer />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
