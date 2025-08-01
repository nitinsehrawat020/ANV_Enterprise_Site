import { useWorker } from "../../hooks/useWorker";
import { StyleWorkerList, WorkerListContainer } from "./StyleWorker";
import WorkerCard from "./WorkerCard";
import WorkerDetailsModal from "./WorkerDetailsModal";
import { useSearchParams } from "react-router-dom";

function WorkersList({ selectedWorker, setSelectedWorker }) {
  const { workers, isLoading } = useWorker();
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("filter") || "all";

  if (isLoading) return;

  let filterWorker = [];
  if (active === "all") {
    filterWorker = workers;
  } else {
    workers.map((worker) => {
      if (worker.activeStatus === (active === "active"))
        filterWorker.push(worker);
    });
  }

  filterWorker = filterWorker.sort((a, b) => {
    return Number(b.activeStatus) - Number(a.activeStatus);
  });

  function handleClick(value) {
    searchParams.delete("filter");
    searchParams.set("worker", value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

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
              onClick={() => {
                setSelectedWorker(worker);
                handleClick(worker.name);
              }}
            />
          ))}
        {selectedWorker && (
          <WorkerDetailsModal
            onClose={() => {
              setSelectedWorker(null);
              searchParams.delete("worker");
              setSearchParams(searchParams);
            }}
            worker={selectedWorker}
          />
        )}
      </WorkerListContainer>
    </StyleWorkerList>
  );
}

export default WorkersList;
