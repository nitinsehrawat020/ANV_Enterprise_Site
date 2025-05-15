import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { registerUserApi } from "../../services/userApi";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: registerUser, isLoading } = useMutation({
    mutationFn: (data) => registerUserApi(data),
    onSuccess: (res) => {
      if (res || res?.data?.error || res?.error || res?.status === 400) {
        toast.error(res?.data?.message || "Registration failed");
        return;
      }
      toast.success("user register succesfully");
      navigate("/login");
    },
    onError: (err) => {
      // console.log(err);
      //   toast.error(err);
    },
  });
  return { registerUser, isLoading };
}
