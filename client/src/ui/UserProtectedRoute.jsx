import { Navigate } from "react-router-dom";
import { useUser } from "../component/LoginAndSignup/useUser"; // Adjust path as needed
import toast from "react-hot-toast";
// import Spinner from './Spinner'; // Or your preferred loading component

function UserProtectedRoute({ children }) {
  const { user, isLoading } = useUser();
  if (isLoading) {
    return <div>Loading authentication...</div>;
  }

  if (user) {
    return children;
  }

  if (!user && !isLoading) {
    toast.error("kindly relogin to continue");
    return <Navigate to="/" replace />; //
  }

  return null;
}

export default UserProtectedRoute;
