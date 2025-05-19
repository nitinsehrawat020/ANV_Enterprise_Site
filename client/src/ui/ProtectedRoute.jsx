import { FullPage } from "../component/LoginAndSignup/StyleLogin";
import { useUser } from "../component/LoginAndSignup/useUser";

import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { isLoading: isGetUser } = useUser();

  if (isGetUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  return children;
}

export default ProtectedRoute;
