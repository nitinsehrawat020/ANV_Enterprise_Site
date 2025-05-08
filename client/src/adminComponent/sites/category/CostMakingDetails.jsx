import styled from "styled-components";
import Heading from "../../../ui/Heading";
import { TableContainer } from "./SiteModal";

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

function CostMakingDetails({ site, workers }) {
  const countDaysWorked = (workers) => {
    const siteWorkDays = {};

    workers.forEach((worker) => {
      Object.values(worker.attendance).forEach((attendance) => {
        if (attendance.site === site.name) {
          const workerType = worker.member_type;
          const attendanceType = attendance.value;

          if (!siteWorkDays[workerType]) {
            siteWorkDays[workerType] = {
              full_present: 0,
              night: 0,
              half_day: 0,
              present: 0,
              absent: 0,
            };
          }

          if (attendanceType in siteWorkDays[workerType]) {
            siteWorkDays[workerType][attendanceType]++;
          }
        }
      });
    });

    return siteWorkDays;
  };
  const siteWorkDays = countDaysWorked(workers);

  const workerCost =
    siteWorkDays.worker?.full_present * 600 +
    siteWorkDays.worker?.night * 800 +
    siteWorkDays.worker?.half_day * 300 +
    siteWorkDays.worker?.present * 400;

  const helperCost =
    siteWorkDays.helper?.full_present * 400 +
    siteWorkDays.helper?.night * 600 +
    siteWorkDays.helper?.half_day * 200 +
    siteWorkDays.helper?.present * 300 +
    siteWorkDays.helper?.absent * 0;

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
              <td>NA</td>
              <td>NA</td>
              <td>
                {siteWorkDays.worker?.full_present +
                  siteWorkDays.worker?.night +
                  siteWorkDays.worker?.half_day +
                  siteWorkDays.worker?.present}
              </td>
              <td>{workerCost}</td>
            </tr>
            <tr>
              <td>Helper</td>
              <td>NA</td>
              <td>NA</td>
              <td>
                {siteWorkDays.helper?.full_present +
                  siteWorkDays.helper?.night +
                  siteWorkDays.helper?.half_day +
                  siteWorkDays.helper?.present}
              </td>
              <td>{helperCost}</td>
            </tr>
            {site.totalMaterialUsed.map((material) => (
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
                {workerCost +
                  helperCost +
                  site.totalMaterialUsed.reduce(
                    (acc, material) => acc + material.quantity * material.cost,
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
