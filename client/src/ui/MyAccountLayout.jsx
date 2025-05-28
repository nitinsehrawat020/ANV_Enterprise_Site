import { useNavigate } from "react-router-dom";
import { useUser } from "../component/LoginAndSignup/useUser";
import AccountContent from "../component/myAccount/AccountContent";
import AccountNavigation from "../component/myAccount/AccountNavigation";
import {
  AccountContainer,
  StyleAccountContent,
  StyleAccountNavigation,
} from "../component/myAccount/StyleMyAccount";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import { useEffect } from "react";

function MyAccountLayout() {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!user) {
      toast.error("kindly login");
      navigate("/");
    }
  }, [user, navigate]);

  if (isLoading) return <Spinner />;
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
