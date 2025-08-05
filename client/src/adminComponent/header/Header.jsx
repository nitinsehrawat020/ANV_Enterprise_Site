import { capitalizeFirstLetter } from "../../util/helper";
import Account from "../../ui/Account";
import { StyleHeader, HeaderPlaceholder, Title } from "./StyleHeader";
import { useLocation } from "react-router-dom";
import Logo from "../navbar/Logo";
import useScrollSticky from "../../hooks/useScrollSticky";

function Header() {
  const location = useLocation();
  const { isSticky } = useScrollSticky(0.15); // Trigger at 15% of viewport height for early sticky behavior

  const title = location.pathname.split("/").pop() || "Header";

  return (
    <>
      <StyleHeader isSticky={isSticky}>
        <Logo parent="header" />

        <Title>{capitalizeFirstLetter(title)}</Title>
        <Account display={"true"} />
      </StyleHeader>
      <HeaderPlaceholder isSticky={isSticky} />
    </>
  );
}

export default Header;
