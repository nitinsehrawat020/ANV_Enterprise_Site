import { Nav } from "./StyleNavBar";

import useMobile from "../../hooks/useMobile.jsx";
import MobileNav from "./MobileNav.jsx";
import DesktopNav from "./DesktopNav.jsx";

function NavBar() {
  const { isMobile } = useMobile(768);

  return <Nav>{isMobile ? <MobileNav /> : <DesktopNav />}</Nav>;
}

export default NavBar;
