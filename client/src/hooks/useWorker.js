import { useQuery } from "@tanstack/react-query";
import { getWorkerApi } from "../services/workerApi";

export function useWorker() {
  const { data, isLoading } = useQuery({
    queryKey: ["worker"],
    queryFn: getWorkerApi,
  });
  return { data, isLoading };
}
