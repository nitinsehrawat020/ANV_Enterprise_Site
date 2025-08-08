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

  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (res) => {
      // Function to extract token from cookies
      const extractTokenFromCookies = (cookieHeader, tokenName) => {
        if (!cookieHeader) return null;

        const cookies = Array.isArray(cookieHeader)
          ? cookieHeader
          : [cookieHeader];

        for (const cookie of cookies) {
          if (typeof cookie === "string" && cookie.includes(`${tokenName}=`)) {
            const match = cookie.match(new RegExp(`${tokenName}=([^;]+)`));
            if (match) {
              return match[1];
            }
          }
        }
        return null;
      };

      // Extract tokens from cookies
      const setCookieHeader = res.headers["set-cookie"];
      const accessToken = extractTokenFromCookies(
        setCookieHeader,
        "accessToken"
      );
      const refreshToken = extractTokenFromCookies(
        setCookieHeader,
        "refreshToken"
      );

      // Store tokens in localStorage if found
      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      } else {
        // Fallback: try to get from response body
        if (res.data?.data?.accessToken && res.data?.data?.refreshToken) {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          localStorage.setItem("refreshToken", res.data.data.refreshToken);
        }
      }

      toast.success(res.data.message);
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { login, isLoading };
}

export function useForgotPassword() {
  const navigate = useNavigate();

  const { mutate: forgotPassword, isPending: isLoading } = useMutation({
    mutationFn: ({ email }) => forgotPasswordApi({ email }),
    onSuccess: (res, variables) => {
      navigate("/verifyOtp", { state: variables.email });
    },
    onError: (error) => {
      toast.error(
        error?.response?.data?.message || error || "issue in userApi"
      );
    },
  });
  return { forgotPassword, isLoading };
}
export function useVeriftOtp() {
  const navigate = useNavigate();
  const { mutate: verifyOtp, isPending: isLoading } = useMutation({
    mutationFn: ({ email, otp }) => submitOtpApi({ email, otp }),
    onSuccess: (res, variabels) => {
      navigate("/changePassword", {
        state: { email: variabels.email, data: res.data },
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { verifyOtp, isLoading };
}

export function useResetPassword() {
  const navigate = useNavigate();
  const { mutate: resetPassword, isPending: isLoading } = useMutation({
    mutationFn: ({ email, newPassword, confirmedNewPassword }) =>
      ResetPasswordApi({ email, newPassword, confirmedNewPassword }),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.response.data.message || "issue in submitOtpApi");
    },
  });
  return { resetPassword, isLoading };
}
export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
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
