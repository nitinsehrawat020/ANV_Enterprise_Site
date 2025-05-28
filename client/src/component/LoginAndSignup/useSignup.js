import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerUserApi } from "../../services/userApi";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: registerUser, isPending: isLoading } = useMutation({
    mutationFn: (data) => registerUserApi(data),
    onSuccess: (res) => {
      if (!res || res?.data?.error || res?.error || res?.status === 400) {
        toast.error(res?.data?.message || "Registration failed");
        return;
      }
      toast.success("user register succesfully");
      navigate("/login");
    },
  });
  return { registerUser, isLoading };
}
