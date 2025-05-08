import { StyleNavBarAccount } from "../adminComponent/navbar/StyleNavBar";

import { MdOutlineAccountCircle } from "react-icons/md";

function Account({ display }) {
  return (
    <StyleNavBarAccount display={display}>
      <MdOutlineAccountCircle />
      nitin
    </StyleNavBarAccount>
  );
}

export default Account;
