import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
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
      toast.error("issue in updating the attendance ");
    },
  });
  return { updateAttendance, isLoading };
}

export function useUpdateWedesdayPayment() {
  const { mutate: updateWednesdayPayment, isLoading } = useMutation({
    mutationFn: ({ data }) => updateWedesdayPaymentApi({ data }),
    onSuccess: (res) => {
      console.log(res);

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
  const { mutate: updateWorkerPayment, isLoading } = useMutation({
    mutationFn: ({ data }) => updateWorkerPaymentApi({ data }),
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.data.message);
    },
  });
  return { updateWorkerPayment, isLoading };
}
