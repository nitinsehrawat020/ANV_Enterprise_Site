import { useState } from "react";
import ActionButton from "../../adminComponent/worker/ActionButton";
import Category from "../../adminComponent/worker/Category";
import WorkersList from "../../adminComponent/worker/WorkersList";
import { Content } from "./Style";
import { ActionCategoryConatiner } from "../../adminComponent/worker/StyleWorker";

function Workers() {
  const [selectedWorker, setSelectedWorker] = useState(null);

  return (
    <Content>
      <ActionCategoryConatiner>
        {!selectedWorker && <Category />}
        <ActionButton />
      </ActionCategoryConatiner>
      <WorkersList
        selectedWorker={selectedWorker}
        setSelectedWorker={setSelectedWorker}
      />
    </Content>
  );
}

export default Workers;
