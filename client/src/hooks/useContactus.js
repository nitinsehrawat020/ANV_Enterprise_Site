import { useMutation } from "@tanstack/react-query";
import { submitContactusFormApi } from "../services/contactusApi";
import toast from "react-hot-toast";

export function useSubmitContactForm() {
  const { mutate: submitContactusForm, isLoading: isFormSubmittuing } =
    useMutation({
      mutationFn: (data) => submitContactusFormApi(data),
      onSuccess: (res) => {
        toast.success(res.message);
      },
      onError: (err) => {
        console.log(err);

        toast.error(err.message);
      },
    });
  return { submitContactusForm, isFormSubmittuing };
}
