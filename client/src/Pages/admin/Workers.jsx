import { useState } from "react";
import ActionButton from "../../adminComponent/worker/ActionButton";
import Category from "../../adminComponent/worker/Category";
import WorkersList from "../../adminComponent/worker/WorkersList";
import { Content } from "./Style";

function Workers() {
  const [selectedWorker, setSelectedWorker] = useState(null);

  const [active, setActive] = useState(true);

  return (
    <Content>
      <ActionButton />
      {!selectedWorker && <Category active={active} setActive={setActive} />}
      <WorkersList
        active={active}
        selectedWorker={selectedWorker}
        setSelectedWorker={setSelectedWorker}
      />
    </Content>
  );
}

export default Workers;
