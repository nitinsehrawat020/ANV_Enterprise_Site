import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addVendourApi,
  deleteVendourApi,
  getVendoursApi,
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
  const queryClient = useQueryClient();
  const { mutate: addVendour, isLoading } = useMutation({
    mutationFn: ({ data }) => addVendourApi({ data }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["vendour"]);
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { addVendour, isLoading };
}

export function useVendourTransaction() {
  const queryClient = useQueryClient();
  const { mutate: updateVendourTransaction, isLoading } = useMutation({
    mutationFn: ({ data, vendourId }) =>
      updateTransactionApi({ data, vendourId }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["vendour"]);
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateVendourTransaction, isLoading };
}

export function useUpdateVendourHistoryPayment() {
  const queryClient = useQueryClient();

  const { mutate: updateVendourHistoryPayment, isLoading } = useMutation({
    mutationFn: ({ data, vendourId }) =>
      updatePaymentHistoryApi({ data, vendourId }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["vendour"]);
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateVendourHistoryPayment, isLoading };
}

export function useDeleteVendour() {
  const queryClient = useQueryClient();
  const { mutate: deleteVendour, isLoading: isDeletingVendour } = useMutation({
    mutationFn: (vendourId) => deleteVendourApi(vendourId),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["vendour"]);
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteVendour, isDeletingVendour };
}
