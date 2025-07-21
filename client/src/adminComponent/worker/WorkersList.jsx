import { useState } from "react";
import { useWorker } from "../../hooks/useWorker";
import { StyleWorkerList, WorkerListContainer } from "./StyleWorker";
import WorkerCard from "./WorkerCard";
import WorkerDetailsModal from "./WorkerDetailsModal";

function WorkersList({ active, selectedWorker, setSelectedWorker }) {
  const { workers, isLoading } = useWorker();

  if (isLoading) return;

  const filterWorker = workers.filter((worker) => {
    if (worker.activeStatus === active) return worker;
  });

  return (
    <StyleWorkerList>
      <WorkerListContainer>
        {!selectedWorker &&
          filterWorker?.map((worker, index) => (
            <WorkerCard
              key={index}
              worker={worker}
              active={active}
              selectedWorker={selectedWorker}
              onClick={() => setSelectedWorker(worker)}
            />
          ))}
        {selectedWorker && (
          <WorkerDetailsModal
            onClose={() => setSelectedWorker(null)}
            worker={selectedWorker}
          />
        )}
      </WorkerListContainer>
    </StyleWorkerList>
  );
}

export default WorkersList;
