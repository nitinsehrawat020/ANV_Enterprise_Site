import { Nav, NavPlaceholder } from "./StyleNavBar";

import useMobile from "../../hooks/useMobile.jsx";
import useScrollSticky from "../../hooks/useScrollSticky.jsx";
import MobileNav from "./MobileNav.jsx";
import DesktopNav from "./DesktopNav.jsx";

function NavBar() {
  const { isMobile } = useMobile(768);
  const { isSticky } = useScrollSticky(0.15); // Trigger at 15% of viewport height for early sticky behavior

  return (
    <>
      <Nav isSticky={isSticky}>{isMobile ? <MobileNav /> : <DesktopNav />}</Nav>
      <NavPlaceholder isSticky={isSticky} />
    </>
  );
}

export default NavBar;
