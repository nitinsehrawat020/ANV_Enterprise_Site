import { Outlet } from "react-router-dom";
import { StyledMain } from "./StyleMain";

function Main() {
  return (
    <StyledMain>
      <Outlet />
    </StyledMain>
  );
}

export default Main;
