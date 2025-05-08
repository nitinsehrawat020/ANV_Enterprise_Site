import { capitalizeFirstLetter } from "../../util/helper";
import Account from "../../ui/Account";
import { StyleHeader, Title } from "./StyleHeader";
import { useLocation } from "react-router-dom";
import Logo from "../navbar/Logo";

function Header() {
  const location = useLocation();

  const title = location.pathname.split("/").pop() || "Header";

  return (
    <StyleHeader>
      <Logo parent="header" />

      <Title>{capitalizeFirstLetter(title)}</Title>
      <Account display={"true"} />
    </StyleHeader>
  );
}

export default Header;
