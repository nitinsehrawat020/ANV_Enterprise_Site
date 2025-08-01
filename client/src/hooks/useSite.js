import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addInventoryItem,
  addPaymentApi,
  deleteSiteApi,
  getSiteApi,
  registerSite,
  updateWorkProgressApi,
} from "../services/SiteApi";
import toast from "react-hot-toast";

export function useSite() {
  const token = localStorage.getItem("accesstoken");
  const { data: sites, isLoading } = useQuery({
    queryKey: ["site"],
    queryFn: getSiteApi,
    // enabled: !!token,
  });

  return { sites, isLoading };
}

export function useUpdateSitePayment() {
  const queryClient = useQueryClient();
  const { mutate: addSitePayment, isLoading } = useMutation({
    mutationFn: ({ data, siteId }) => addPaymentApi({ data, siteId }),
    onSuccess: (res) => {
      toast.success("payment has been added succesfully");
      queryClient.invalidateQueries(["site"]);
    },
    onError: (err) => {
      console.log(err);

      toast.error("issue in updating payment!!");
    },
  });
  return { addSitePayment, isLoading };
}
export function useAddSiteInventory() {
  const queryClient = useQueryClient();
  const { mutate: addSitePayment, isLoading } = useMutation({
    mutationFn: ({ data, siteId }) => addInventoryItem({ data, siteId }),
    onSuccess: () => {
      toast.success("the item has been add successfully");
      queryClient.invalidateQueries(["site"]);
    },
    onError: () => {
      toast.error("issue in add inventory item");
    },
  });
  return { addSitePayment, isLoading };
}

export function useUpdateWorkProgress() {
  const queryClient = useQueryClient();

  const { mutate: updateWorkProgress, isLoading } = useMutation({
    mutationFn: ({ data, siteId }) => updateWorkProgressApi({ data, siteId }),
    onSuccess: () => {
      queryClient.invalidateQueries(["sites"]);
      toast.success("site updated succesffully");
    },
    onError: () => {
      toast.error("issue in updating the site");
    },
  });
  return { updateWorkProgress, isLoading };
}

export function useAddSite() {
  const queryClient = useQueryClient();
  const { mutate: addSite, isLoading: isAddingSite } = useMutation({
    mutationFn: ({ data }) => registerSite({ data }),
    onSuccess: (res) => {
      queryClient.invalidateQueries(["worker"]);
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { addSite, isAddingSite };
}

export function useDeleteSite() {
  const queryClient = useQueryClient();
  const { mutate: deleteSite, isLoading: isDeletingSite } = useMutation({
    mutationFn: (siteId) => deleteSiteApi(siteId),
    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries(["site"]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteSite, isDeletingSite };
}
