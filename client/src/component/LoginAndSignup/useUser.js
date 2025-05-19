import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/userApi";

export function useUser() {
  const token = localStorage.getItem("accessToken");
  const queryClient = useQueryClient();

  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    enabled: !!token,

    onError: () => {
      // Clear tokens if request fails (token expired, etc)
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      queryClient.setQueryData(["user"], null);
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: user?.status === "active" && user?.role === "admin",
    isAdminAuthenticated: user?.role === "admin" && user?.status === "active",
  };
}
