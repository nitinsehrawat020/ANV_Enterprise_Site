import { useMemo } from "react";
import { useSite } from "../../hooks/useSite";

const AttendanceRow = ({ worker, register, sites }) => (
  <tr key={worker.id}>
    <td>
      {worker.name}
      <input
        type="hidden"
        {...register(`workerId_${worker._id}`)}
        value={worker._id}
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance_${worker._id}`)}
        value="present"
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance_${worker._id}`)}
        value="absent"
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance_${worker._id}`)}
        value="night"
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance_${worker._id}`)}
        value="half_day"
      />
    </td>
    <td>
      <input
        type="radio"
        {...register(`attendance_${worker._id}`)}
        value="full_present"
      />
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

function shouldShowAllWorkers(day) {
  return !day || day === "Today" || day === "Today Attendance";
}

function isWorkerNotAvailableOnDay(worker, targetDay) {
  if (!worker.attendance?.attendanceData) {
    return false;
  }

  const targetDate = new Date(targetDay).toISOString().split("T")[0];

  for (const monthData of worker.attendance.attendanceData) {
    if (monthData.data && Array.isArray(monthData.data)) {
      for (const dayData of monthData.data) {
        const attendanceDate = new Date(dayData.date)
          .toISOString()
          .split("T")[0];

        if (
          attendanceDate === targetDate &&
          dayData.value === "not_available"
        ) {
          return true;
        }
      }
    }
  }

  return false;
}

function RenderRow({ WorkerData, register, day }) {
  const { sites, isLoading } = useSite();

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
    <>
      {filteredWorkers.map((worker) => (
        <AttendanceRow
          key={worker._id}
          worker={worker}
          register={register}
          sites={sites}
        />
      ))}
    </>
  );
}

export default RenderRow;
