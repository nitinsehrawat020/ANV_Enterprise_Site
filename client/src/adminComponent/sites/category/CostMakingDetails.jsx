import styled from "styled-components";
import Heading from "../../../ui/Heading";
import { TableContainer } from "./SiteModal";
import { useWorker } from "../../../hooks/useWorker";

const CostMaking = styled.div`
  grid-area: costMaking;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  @media (max-width: 768px) {
    height: 300px;
  }
`;

function CostMakingDetails({ site }) {
  const { workers, isLoading } = useWorker();

  if (isLoading) return;

  const countDaysWorked = (workers) => {
    const siteWorkData = {};

    workers.forEach((worker) => {
      worker.attendance.attendanceData.forEach((att) => {
        att.data.forEach((attendance) => {
          if (attendance.site === site._id) {
            const workerType = worker.memberType;
            const attendanceType = attendance.value;

            if (!siteWorkData[workerType]) {
              siteWorkData[workerType] = {
                full_present: 0,
                night: 0,
                half_day: 0,
                present: 0,
                absent: 0,
              };
            }

            if (attendanceType in siteWorkData[workerType]) {
              siteWorkData[workerType][attendanceType]++;
            }
          }
        });
      });
    });

    return siteWorkData;
  };

  const countUniqueWorkers = (workers) => {
    const workerCounts = {};
    const uniqueWorkerSets = {};

    workers.forEach((worker) => {
      let hasWorkedOnSite = false;

      worker.attendance.attendanceData.forEach((att) => {
        att.data.forEach((attendance) => {
          if (attendance.site === site._id) {
            hasWorkedOnSite = true;
          }
        });
      });

      if (hasWorkedOnSite) {
        const workerType = worker.memberType;

        if (!uniqueWorkerSets[workerType]) {
          uniqueWorkerSets[workerType] = new Set();
        }

        uniqueWorkerSets[workerType].add(worker._id);
      }
    });

    Object.keys(uniqueWorkerSets).forEach((workerType) => {
      workerCounts[workerType] = uniqueWorkerSets[workerType].size;
    });

    return { workerCounts, uniqueWorkerSets };
  };

  const siteWorkData = countDaysWorked(workers);

  const { workerCounts, uniqueWorkerSets } = countUniqueWorkers(workers);

  const workerDays =
    (siteWorkData.worker?.full_present * 1.5 || 0) +
    (siteWorkData.worker?.night * 2 || 0) +
    (siteWorkData.worker?.half_day * 0.5 || 0) +
    (siteWorkData.worker?.present * 1 || 0);

  const helperDays =
    (siteWorkData.helper?.full_present * 1.5 || 0) +
    (siteWorkData.helper?.night * 2 || 0) +
    (siteWorkData.helper?.half_day * 0.5 || 0) +
    (siteWorkData.helper?.present * 1 || 0);

  return (
    <CostMaking>
      <Heading as="h4">Cost Making</Heading>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cost Each</th>
              <th>Days</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Worker</td>
              <td>{workerCounts.worker || 0}</td>
              <td>700</td>
              <td>{workerDays}</td>
              <td>{workerDays * 700}</td>
            </tr>
            <tr>
              <td>Helper</td>
              <td>{workerCounts.helper || 0}</td>
              <td>350</td>
              <td>{helperDays}</td>
              <td>{helperDays * 350}</td>
            </tr>
            {site?.totalMaterialUsed?.map((material) => (
              <tr key={material.name}>
                <td>{material.name}</td>
                <td>{material.quantity}</td>
                <td>{material.cost}</td>
                <td>NA</td>
                <td>{material.quantity * material.cost}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>
                {workerDays * 700 +
                  helperDays * 350 +
                  site?.totalMaterialUsed?.reduce(
                    (acc, material) => acc + material?.quantity * material.cost,
                    0
                  )}
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </CostMaking>
  );
}

export default CostMakingDetails;
