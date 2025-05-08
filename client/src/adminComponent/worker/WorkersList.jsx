import { StyleWorkerList, WorkerListContainer } from "./StyleWorker";
import WorkerCard from "./WorkerCard";

function WorkersList({ WorkerData, active }) {
  const filterWorker = WorkerData.filter((worker) => {
    if (worker.active_status === active) return worker;
  });
  return (
    <StyleWorkerList>
      <WorkerListContainer>
        {filterWorker?.map((worker, index) => (
          <WorkerCard key={index} worker={worker} active={active} />
        ))}
      </WorkerListContainer>
    </StyleWorkerList>
  );
}

export default WorkersList;
