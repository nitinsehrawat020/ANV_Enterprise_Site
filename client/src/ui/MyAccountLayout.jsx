import { useNavigate } from "react-router-dom";
import { useUser } from "../component/LoginAndSignup/useUser";
import AccountContent from "../component/myAccount/AccountContent";
import AccountNavigation from "../component/myAccount/AccountNavigation";
import {
  AccountContainer,
  StyleAccountContent,
  StyleAccountNavigation,
} from "../component/myAccount/StyleMyAccount";

function MyAccountLayout() {
  return (
    <AccountContainer>
      <StyleAccountNavigation>
        <AccountNavigation />
      </StyleAccountNavigation>
      <StyleAccountContent>
        <AccountContent />
      </StyleAccountContent>
    </AccountContainer>
  );
}

export default MyAccountLayout;
