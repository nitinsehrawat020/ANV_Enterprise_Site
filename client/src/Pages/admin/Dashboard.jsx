import AlertAndPieChart from "../../adminComponent/dashboard/AlertAndPieChart";
import { calclateStats } from "../../adminComponent/dashboard/DashBoardUtils";
import StatsInfo from "../../adminComponent/dashboard/StatsInfo";
import { useSite } from "../../hooks/useSite";
import { useGetVendour } from "../../hooks/useVendour";
import { useWorker } from "../../hooks/useWorker";
import { Content } from "./Style";

function Dashboard() {
  const { sites, isLoading: isSiteLoading } = useSite();
  const { workers, isLoading: isWorkerLoading } = useWorker();
  const { vendour, isLoading: isVendourLoading } = useGetVendour();

  if (isSiteLoading || isWorkerLoading || isVendourLoading)
    return <div>Loading...</div>;

  const dashboardStats = calclateStats({ sites, workers, vendour });
  return (
    <Content>
      <StatsInfo dashboardStats={dashboardStats} />
      <AlertAndPieChart dashboardStats={dashboardStats} />
    </Content>
  );
}

export default Dashboard;
