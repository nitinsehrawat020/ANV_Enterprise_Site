import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addWorkerApi,
  getWorkerApi,
  updateWedesdayPaymentApi,
  updateWorkerAttendance,
  updateWorkerPaymentApi,
} from "../services/workerApi";
import toast from "react-hot-toast";

export function useWorker() {
  const { data: workers, isLoading } = useQuery({
    queryKey: ["worker"],
    queryFn: getWorkerApi,
  });

  return { workers, isLoading };
}

export function useWorkerAttendance() {
  const queryClient = useQueryClient();
  const { mutate: updateAttendance, isLoading } = useMutation({
    mutationFn: ({ payload }) => updateWorkerAttendance({ data: payload }),
    onSuccess: () => {
      toast.success("the attendance has been updated");
      queryClient.invalidateQueries(["worker", "site"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { updateAttendance, isLoading };
}

export function useUpdateWedesdayPayment() {
  const queryClient = useQueryClient();
  const { mutate: updateWednesdayPayment, isLoading } = useMutation({
    mutationFn: ({ data }) => updateWedesdayPaymentApi({ data }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["worker"]);

      toast.success(res.message);
    },
    onError: (error) => {
      console.log(error);

      toast.error(error.message);
    },
  });
  return { updateWednesdayPayment, isLoading };
}
export function useUpdateworkerPayment() {
  const queryClient = useQueryClient();
  const { mutate: updateWorkerPayment, isLoading } = useMutation({
    mutationFn: ({ data }) => updateWorkerPaymentApi({ data }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["worker"]);
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.data.message);
    },
  });
  return { updateWorkerPayment, isLoading };
}

export function useAddWorker() {
  const queryClient = useQueryClient();
  const { mutate: addWorker, isLoading: isAddingWorker } = useMutation({
    mutationFn: ({ data }) => addWorkerApi({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries(["worker"]);
      toast.success("Worker added successfully!");
    },
    onError: (err) => {
      console.error("useAddWorker error:", err);
      const errorMessage =
        err.response?.data?.message || err.message || "Error adding worker";
      toast.error(errorMessage);
    },
  });
  return { addWorker, isAddingWorker };
}
