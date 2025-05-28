import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addFavDesignApi,
  FalseCeildesignApi,
  getFavDesign,
  moldingDesignApi,
  removeFavDesignApi,
} from "../../services/designApi";
import toast from "react-hot-toast";

export function useFalseCeil() {
  const { data, isLoading } = useQuery({
    queryKey: ["falseCeilDesign"],
    queryFn: FalseCeildesignApi,
  });

  return { data, isLoading };
}
export function useMolding() {
  const { data: moldingDesign, isLoading } = useQuery({
    queryKey: ["moldingdesign"],
    queryFn: moldingDesignApi,
  });
  return { moldingDesign, isLoading };
}
export function useUserFavdesign() {
  const token = localStorage.getItem("accessToken");

  const { data: favDesignInfo, isLoading } = useQuery({
    queryFn: getFavDesign,
    queryKey: ["favdesign"],
    enabled: !!token,
  });

  return { favDesignInfo, isLoading };
}
export function useAddFavDesign() {
  const queryClient = useQueryClient();
  const { mutate: addFavDesign } = useMutation({
    mutationFn: (designId) => addFavDesignApi(designId),
    onSuccess: (res) => {
      toast.success("design added to favorite");

      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["favdesign"] });
    },
    onError: (err) => {
      toast.error("issue in adding design  ");
    },
  });
  return { addFavDesign };
}
export function useRemoveFavDesign() {
  const queryClient = useQueryClient();
  const { mutate: removeFavDesign } = useMutation({
    mutationFn: (designId) => removeFavDesignApi(designId),
    onSuccess: (res) => {
      toast.success("design remove from favorite");
      queryClient.invalidateQueries({ queryKey: ["user"] });
      queryClient.invalidateQueries({ queryKey: ["favdesign"] });
    },
    onError: (err) => {
      toast.error("issue in adding design  ");
    },
  });
  return { removeFavDesign };
}
