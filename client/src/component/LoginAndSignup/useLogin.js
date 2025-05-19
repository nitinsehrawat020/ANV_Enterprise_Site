import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  forgotPasswordApi,
  loginApi,
  logoutUser,
  ResetPasswordApi,
  submitOtpApi,
} from "../../services/userApi";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success(user.data.message);
      localStorage.setItem("accessToken", user.data.data.accessToken);
      localStorage.setItem("refreshToken", user.data.data.refreshToken);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { login, isLoading };
}

export function useForgotPassword() {
  const navigate = useNavigate();

  const { mutate: forgotPassword, isLoading } = useMutation({
    mutationFn: ({ email }) => forgotPasswordApi({ email }),
    onSuccess: (res, variables) => {
      navigate("/verifyOtp", { state: variables.email });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { forgotPassword, isLoading };
}
export function useVeriftOtp() {
  const navigate = useNavigate();
  const { mutate: verifyOtp, isLoading } = useMutation({
    mutationFn: ({ email, otp }) => submitOtpApi({ email, otp }),
    onSuccess: (res, variabels) => {
      navigate("/changePassword", {
        state: { email: variabels.email, data: res.data },
      });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { verifyOtp, isLoading };
}

export function useResetPassword() {
  const navigate = useNavigate();
  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn: ({ email, newPassword, confirmedNewPassword }) =>
      ResetPasswordApi({ email, newPassword, confirmedNewPassword }),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });
  return { resetPassword, isLoading };
}
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      queryClient.removeQueries({ queryKey: ["user"] });

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      navigate("/");
      toast.success("Logged out successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message || "Logout failed");

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      queryClient.removeQueries({ queryKey: ["user"] });
    },
  });
  return { logout, isLoading };
}
