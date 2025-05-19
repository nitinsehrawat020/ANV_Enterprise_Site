import { useEffect } from "react";
import { FullPage } from "../component/LoginAndSignup/StyleLogin";
import { useUser } from "../component/LoginAndSignup/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AdminProtectedRoute({ children }) {
  const { isLoading, isAdminAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminAuthenticated && !isLoading) {
      toast.error("you are not login or your are not admin");
      navigate("/");
    }
  }, [isAdminAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAdminAuthenticated) return children;
}

export default AdminProtectedRoute;
