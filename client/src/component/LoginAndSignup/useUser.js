import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  changeAvatarApi,
  changePasswordApi,
  getCurrentUser,
  updateUserApi,
} from "../../services/userApi";
import toast from "react-hot-toast";

export function useUser() {
  const token = localStorage.getItem("accessToken");
  const queryClient = useQueryClient();

  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    enabled: !!token,

    onError: () => {
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

export function useChangeAvatar() {
  const queryClient = useQueryClient();

  const {
    mutate: changeAvatar,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (data) => changeAvatarApi(data),
    onSuccess: (res) => {
      toast.success("avatar changed successfully");
      queryClient.invalidateQueries("user");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { changeAvatar, isLoading, error };
}
export function useUpdateUser() {
  const queryClient = useQueryClient();

  const {
    mutate: updateUser,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (data) => updateUserApi(data),
    onSuccess: (res) => {
      toast.success(" user updated succesfully");
      queryClient.invalidateQueries("user");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { updateUser, isLoading, error };
}

export function useChangePassword() {
  const {
    mutate: changePassword,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (data) => changePasswordApi(data),
    onSuccess: (res) => {
      toast.success(" password changed succesfully");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { changePassword, isLoading, error };
}
