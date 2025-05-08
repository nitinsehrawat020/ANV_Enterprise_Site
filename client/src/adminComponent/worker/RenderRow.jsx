import { useMemo } from "react";

const AttendanceRow = ({ worker, register, sites }) => (
  <tr key={worker.id}>
    <td>
      {worker.name}
      <input
        type="hidden"
        {...register(`workerId_${worker.id}`)}
        value={worker.id}
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance${worker.id}`)}
        value="present"
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance${worker.id}`)}
        value="absent"
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance${worker.id}`)}
        value="night"
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance${worker.id}`)}
        value="half_day"
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance${worker.id}`)}
        value="full_present"
      />
    </td>
    <td>
      <select {...register(`site${worker.id}`)}>
        <option value="">Select Site</option>
        {sites.map((site) => (
          <option key={site.id} value={site.name}>
            {site.name}
          </option>
        ))}
      </select>
    </td>
  </tr>
);

function shouldShowAllWorkers(day) {
  return !day || day === "Today" || day === "Today Attendance";
}

function RenderRow({ WorkerData, register, day, sites }) {
  const filteredWorkers = useMemo(() => {
    if (shouldShowAllWorkers(day)) {
      return WorkerData;
    } else {
      return WorkerData.filter((worker) => {
        return worker?.attendance[day]?.value === "not_available";
      });
    }
  }, [WorkerData, day]);

  return (
    <>
      {filteredWorkers.map((worker) => (
        <AttendanceRow
          key={worker.id}
          worker={worker}
          register={register}
          sites={sites}
        />
      ))}
    </>
  );
}

export default RenderRow;
