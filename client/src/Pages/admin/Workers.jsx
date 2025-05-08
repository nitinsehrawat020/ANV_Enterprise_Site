import { useState } from "react";
import ActionButton from "../../adminComponent/worker/ActionButton";
import Category from "../../adminComponent/worker/Category";
import WorkersList from "../../adminComponent/worker/WorkersList";
import { Content } from "./Style";

function Workers({ WorkerDataRaw, sites }) {
  const [WorkerData, setWorkerData] = useState(WorkerDataRaw);
  const [active, setActive] = useState("active");

  return (
    <Content>
      <ActionButton WorkerData={WorkerData} sites={sites} />
      <Category active={active} setActive={setActive} />
      <WorkersList WorkerData={WorkerData} active={active} />
    </Content>
  );
}

export default Workers;
