import { Card, CardConatiner, Icon, Info } from "./styleDashboard";

import { BsBuilding, BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";

function StatsInfo({ dashboardStats }) {
  return (
    <>
      <CardConatiner>
        <Card background={"linear-gradient(116.67deg, #48affe, #486dfe)"}>
          <Info>
            <p>Active Site</p>
            <p>{dashboardStats.activeSite}</p>
          </Info>
          <Icon background={"#1d4d99"}>
            <BsBuilding />
          </Icon>
        </Card>
        <Card background={"linear-gradient(120.01deg, #5ce6fe, #34ade8)"}>
          <Info>
            <p>Active Worker</p>
            <p>{dashboardStats.activeWorker}</p>
          </Info>
          <Icon background={"#1c7496"}>
            <GrUserWorker />
          </Icon>
        </Card>
        <Card background={"linear-gradient(119.6deg, #4bd2a5, #47c55d)"}>
          <Info>
            <p>Total Revenue</p>
            <p>{dashboardStats.totalRevenue.toLocaleString()}</p>
          </Info>
          <Icon background={"#236940"}>
            <BsGraphUpArrow />
          </Icon>
        </Card>
        <Card background={"linear-gradient(138.33deg, #f6c11f, #f1591d)"}>
          <Info>
            <p>Total Expenses</p>
            <p>
              {dashboardStats.totalVendourExpenses +
                dashboardStats.totalWorkerExpenses}
            </p>
          </Info>
          <Icon background={"#8c4d17"}>
            <BsGraphDownArrow />
          </Icon>
        </Card>
      </CardConatiner>
    </>
  );
}

export default StatsInfo;
