import { useQuery } from "@tanstack/react-query";
import { getSiteApi } from "../services/SiteApi";

export function useSite() {
  const token = localStorage.getItem("accesstoken");
  const { data: sites, isLoading } = useQuery({
    queryKey: ["site"],
    queryFn: getSiteApi,
    // enabled: !!token,
  });

  return { sites, isLoading };
}
