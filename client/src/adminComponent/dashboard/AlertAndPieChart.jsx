import AlertBox from "./AlertBox";
import InfoChart from "./InfoChart";
import LastDayUpdate from "./LastDayUpdate";
import { Conatiner } from "./styleDashboard";

function AlertAndPieChart({ dashboardStats }) {
  return (
    <Conatiner>
      <AlertBox />
      <LastDayUpdate />
      <InfoChart dashboardStats={dashboardStats} />
    </Conatiner>
  );
}

export default AlertAndPieChart;
