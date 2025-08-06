import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  FalseCeildesignApi,
  moldingDesignApi,
  addDesignApi,
  deleteDesignApi,
  getFavDesign,
  addFavDesignApi,
  removeFavDesignApi,
} from "../services/designApi";
import toast from "react-hot-toast";

export function useFalseCeil() {
  const { data: falseCeilDesigns, isLoading: isFalseceilLoading } = useQuery({
    queryKey: ["falseCeilDesigns"],
    queryFn: FalseCeildesignApi,
  });

  return { falseCeilDesigns, isFalseceilLoading };
}

export function useMolding() {
  const { data: moldingDesigns, isLoading: isMoldingLoading } = useQuery({
    queryKey: ["moldingDesigns"],
    queryFn: moldingDesignApi,
  });

  return { moldingDesigns, isMoldingLoading };
}

export function useAddDesign() {
  const queryClient = useQueryClient();
  const { mutate: addDesign, isLoading: isAddingDesign } = useMutation({
    mutationFn: ({ data }) => addDesignApi({ data }),
    onSuccess: () => {
      queryClient.invalidateQueries(["falseCeilDesigns"]);
      queryClient.invalidateQueries(["moldingDesigns"]);
      toast.success("Design added successfully!");
    },
    onError: (err) => {
      console.error("useAddDesign error:", err);
      const errorMessage =
        err.response?.data?.message || err.message || "Error adding design";
      toast.error(errorMessage);
    },
  });
  return { addDesign, isAddingDesign };
}

export function useDeleteDesign() {
  const queryClient = useQueryClient();
  const { mutate: deleteDesign, isLoading: isDeletingDesign } = useMutation({
    mutationFn: (designId) => deleteDesignApi(designId),
    onSuccess: () => {
      queryClient.invalidateQueries(["falseCeilDesigns"]);
      queryClient.invalidateQueries(["moldingDesigns"]);
      toast.success("Design deleted successfully!");
    },
    onError: (err) => {
      console.error("useDeleteDesign error:", err);
      const errorMessage =
        err.response?.data?.message || err.message || "Error deleting design";
      toast.error(errorMessage);
    },
  });
  return { deleteDesign, isDeletingDesign };
}

export function useFavDesign() {
  const token = localStorage.getItem("accessToken");
  const { data: favDesigns, isLoading: isFavLoading } = useQuery({
    queryKey: ["favDesigns"],
    queryFn: getFavDesign,
    enabled: !!token,
  });

  return { favDesigns, isFavLoading };
}

export function useAddFavDesign() {
  const queryClient = useQueryClient();
  const { mutate: addFavDesign, isLoading: isAddingFav } = useMutation({
    mutationFn: (designId) => addFavDesignApi(designId),
    onSuccess: () => {
      queryClient.invalidateQueries(["favDesigns"]);
      toast.success("Added to favorites!");
    },
    onError: (err) => {
      err.status === 401 &&
        toast.error("kindly  login to add design To favorite");
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Error adding to favorites";
      err.status === 401 || toast.error(errorMessage);
    },
  });
  return { addFavDesign, isAddingFav };
}

export function useRemoveFavDesign() {
  const queryClient = useQueryClient();
  const { mutate: removeFavDesign, isLoading: isRemovingFav } = useMutation({
    mutationFn: (designId) => removeFavDesignApi(designId),
    onSuccess: () => {
      queryClient.invalidateQueries(["favDesigns"]);
      toast.success("Removed from favorites!");
    },
    onError: (err) => {
      console.error("useRemoveFavDesign error:", err);
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Error removing from favorites";
      toast.error(errorMessage);
    },
  });
  return { removeFavDesign, isRemovingFav };
}
