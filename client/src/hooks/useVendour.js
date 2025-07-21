import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addVendourApi,
  getVendoursApi,
  updatePaymentApi,
  updatePaymentHistoryApi,
  updateTransactionApi,
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
  return { addVendour, isLoading };
}

export function useUpdatePayment() {
  const { mutate: updateVendourPayment, isLoading } = useMutation({
    mutationFn: ({ data, vendourId }) => updatePaymentApi({ data, vendourId }),
    onSuccess: (res) => {
      toast.success("payment added successfully");
    },
    onError: (err) => {
      toast.error("issue on added payment");
    },
  });
  return { updateVendourPayment, isLoading };
}
export function useVendourTransaction() {
  const { mutate: updateVendourTransaction, isLoading } = useMutation({
    mutationFn: ({ data, vendourId }) =>
      updateTransactionApi({ data, vendourId }),
    onSuccess: (res) => {
      toast.success("transaction added successfully");
    },
    onError: (err) => {
      toast.error("issue on added transaction");
    },
  });
  return { updateVendourTransaction, isLoading };
}

export function useUpdateVendourHistoryPayment() {
  const { mutate: updateVendourHistoryPayment, isLoading } = useMutation({
    mutationFn: ({ data, vendourId }) =>
      updatePaymentHistoryApi({ data, vendourId }),
    onSuccess: (res) => {
      toast.success("vendour payment updated succesfully");
    },
    onError: (err) => {
      toast.error("issue in vendour payment history ");
    },
  });
  return { updateVendourHistoryPayment, isLoading };
}
