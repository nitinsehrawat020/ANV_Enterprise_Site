import AdminNavButton from "../../ui/AdminNavButton";
import { StyleNavBarMenu, StyleNavBarMenuList } from "./StyleNavBar";

import { HiOutlineHome, HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { GrUserWorker } from "react-icons/gr";
import { AiTwotoneSetting } from "react-icons/ai";

function Menu() {
  return (
    <StyleNavBarMenu>
      <StyleNavBarMenuList>
        <AdminNavButton icon={<HiOutlineHome />} text="Home" to="/dashboard" />
        <AdminNavButton icon={<GrUserWorker />} text="Worker" to="/worker" />
        <AdminNavButton
          icon={<HiOutlineOfficeBuilding />}
          text="Sites"
          to="/site"
        />
        <AdminNavButton
          icon={<HiOutlineBuildingStorefront />}
          text="Vendours"
          to="vendour"
        />
        <AdminNavButton
          icon={<AiTwotoneSetting />}
          text="Setting"
          to="setting"
        />
      </StyleNavBarMenuList>
    </StyleNavBarMenu>
  );
}

export default Menu;
