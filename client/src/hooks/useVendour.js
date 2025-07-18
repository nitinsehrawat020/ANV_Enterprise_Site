import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addVendourApi,
  getVendoursApi,
  updatePaymentApi,
} from "../services/vendourApi";
import toast from "react-hot-toast";

export function useGetVendour() {
  const { data: vendour, isLoading } = useQuery({
    queryFn: getVendoursApi,
    queryKey: ["vendour"],
  });

  return { vendour, isLoading };
}

export function useAddVendour() {
  const { mutate: addVendour, isLoading } = useMutation({
    mutationFn: ({ data }) => addVendourApi({ data }),
    onSuccess: (res) => {
      toast.success("vensour added successfully");
    },
    onError: (err) => {
      toast.error("issue in adding vendour");
    },
  });
}

export function useUpdatePayment({ data, vendourId }) {
  const { mutate: updateVendourPayment, isLoading } = useMutation({
    mutationFn: ({ data, vendourId }) => updatePaymentApi({ data, vendourId }),
  });
}
