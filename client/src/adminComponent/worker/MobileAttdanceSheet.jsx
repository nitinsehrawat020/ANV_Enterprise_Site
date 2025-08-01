import { useMemo } from "react";
import styled from "styled-components";
import { isWorkerNotAvailableOnDay } from "./utils/attendanceUtils";
import { useSite } from "../../hooks/useSite";

const StyleMobileAttdanceSheet = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    /* height: 300px; */
    padding: 2rem;

    overflow: auto;
    scrollbar-width: 1px;

    &::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }

    table {
      width: 100%;
      height: 50%;
      border-collapse: collapse;
      border-spacing: 4;
      border: 2px solid var(--color-background-800);
    }
    thead tr {
      text-align: center;
      padding: 1rem 1rem;
      background-color: var(--color-background-800);
      border: 1px solid var(--color-background-800);
    }
    thead th {
      text-align: center;
      padding: 1rem 0.6rem;
      background-color: var(--color-background-300);
      border: 1px solid var(--color-background-800);
    }
    td {
      text-align: center;
      padding: 0.7rem 0rem;
      border: 1px solid var(--color-background-500);
    }
    select {
      /* padding: 0.2rem; */
      border-radius: 5px;
      border: 1px solid var(--color-background-500);
      background-color: var(--color-background-800);
    }
    input[type="submit"] {
      padding: 0.2rem;
      border-radius: 5px;
      border: 1px solid var(--color-background-500);
      background-color: var(--color-primary-700);
      color: var(--color-white-500);
      cursor: pointer;
    }
  }
`;

function RenderRow({ worker, register, sites }) {
  return (
    <tr key={worker._id}>
      <td>
        {worker.name}
        <input
          type="hidden"
          {...register(`workerId_${worker._id}`)}
          value={worker.id}
        />
      </td>
      <td>
        <select {...register(`attendance_${worker._id}`)}>
          <option value="">select</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="night">Night</option>
          <option value="half_day">Half Day</option>
          <option value="full_present">full Day</option>
        </select>
      </td>
      <td>
        <select {...register(`site_${worker._id}`)}>
          <option value="">Select Site</option>
          {sites.map((site) => (
            <option key={site._id} value={site._id}>
              {site.name}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
}
function shouldShowAllWorkers(day) {
  return !day || day === "today" || day === "Today Attendance";
}

function MobileAttdanceSheet({
  register,
  WorkerData,
  onSubmit,
  handleSubmit,
  day,
}) {
  const { sites, isLoading } = useSite();
  console.log(sites);

  const filteredWorkers = useMemo(() => {
    if (shouldShowAllWorkers(day)) {
      return WorkerData;
    } else {
      return WorkerData.filter((worker) => {
        return isWorkerNotAvailableOnDay(worker, day);
      });
    }
  }, [WorkerData, day]);
  if (isLoading) return;

  return (
    <StyleMobileAttdanceSheet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Attendance</th>
              <th>Site</th>
            </tr>
          </thead>
          <tbody>
            {filteredWorkers.map((worker, index) =>
              RenderRow({ worker, register, index, sites })
            )}
            <tr>
              <td></td>
              <td></td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </StyleMobileAttdanceSheet>
  );
}

export default MobileAttdanceSheet;
