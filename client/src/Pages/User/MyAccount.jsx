import { useLocation } from "react-router-dom";
import {
  SelectButton,
  SelectContentContainer,
  SelectedContent,
  StyleMyAccount,
} from "../../component/myAccount/StyleMyAccount";

import { FaUser, FaShoppingCart, FaLock } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

import useTablet from "../../hooks/useTablet";
import useMobile from "../../hooks/useMobile";

// Import components from separate files
import {
  ProfileContent,
  OrderHistoryContent,
  PasswordContent,
  PaymentHistoryContent,
} from "../../component/myAccount/components";

function MyAccount() {
  const location = useLocation();
  const { isTablet } = useTablet();
  const { isMobile } = useMobile();

  const renderContent = () => {
    const path = location.pathname;

    switch (path) {
      case "/my-account/profile":
        return <ProfileContent />;
      case "/my-account/order-history":
        return <OrderHistoryContent />;
      case "/my-account/password":
        return <PasswordContent />;
      case "/my-account/payment-history":
        return <PaymentHistoryContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <StyleMyAccount>
      {!isTablet && !isMobile && (
        <SelectContentContainer>
          <SelectButton to="/my-account/profile">
            <FaUser />
            Profile
          </SelectButton>
          <SelectButton to="/my-account/order-history">
            <FaShoppingCart />
            Order History
          </SelectButton>
          <SelectButton to="/my-account/password">
            <FaLock />
            Password
          </SelectButton>
          <SelectButton to="/my-account/payment-history">
            <FaIndianRupeeSign />
            Payment History
          </SelectButton>
        </SelectContentContainer>
      )}
      <SelectedContent>{renderContent()}</SelectedContent>
    </StyleMyAccount>
  );
}

export default MyAccount;
