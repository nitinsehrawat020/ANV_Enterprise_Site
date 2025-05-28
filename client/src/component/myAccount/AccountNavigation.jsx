import { useUser } from "../LoginAndSignup/useUser";
import { FaClipboardUser } from "react-icons/fa6";
import { LiaUserTimesSolid } from "react-icons/lia";
import { TbPasswordFingerprint } from "react-icons/tb";
import {
  AccountNavContainer,
  LinkContainer,
  StyleAccountLink,
} from "./StyleMyAccount";

function AccountNavigation() {
  const { user, isLoading } = useUser();
  return (
    <AccountNavContainer>
      <LinkContainer>
        <StyleAccountLink to={`/myAccount/info`}>
          {<FaClipboardUser />}Account Info
        </StyleAccountLink>
        <StyleAccountLink to={`/myAccount/changePassword`}>
          {<TbPasswordFingerprint />}ChangePassword
        </StyleAccountLink>
      </LinkContainer>
    </AccountNavContainer>
  );
}

export default AccountNavigation;
