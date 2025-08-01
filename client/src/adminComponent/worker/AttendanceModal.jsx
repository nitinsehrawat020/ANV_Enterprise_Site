import { useForm } from "react-hook-form";
import styled from "styled-components";
import RenderRow from "./RenderRow";
import { getTodayFormattedDate } from "../../util/helper";
import MobileAttdanceSheet from "./MobileAttdanceSheet";
import { salaryAmount } from "../../data/setting";
import { useWorkerAttendance } from "../../hooks/useWorker";

const ModalContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    height: 400px;
    padding: 1rem 0.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DesktopAttendanceSheet = styled.div`
  /* width: 200px; */
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 300px;
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
    padding: 1rem 1rem;
    background-color: var(--color-background-300);
    border: 1px solid var(--color-background-800);
  }
  td {
    text-align: center;
    padding: 0.7rem;
    border: 1px solid var(--color-background-500);
  }
  select {
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-background-800);
  }
  input {
    width: 80px;
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-background-800);
  }
  input[type="date"] {
    width: 80%;
  }
  select:focus,
  input:focus {
    outline: 2px solid var(--color-background-800);
    outline-offset: -1px;
  }
  select:disabled,
  input:disabled {
    background-color: var(--color-background-200);
    color: var(--color-background-500);
  }
  input[type="submit"] {
    padding: 0.2rem;
    border-radius: 5px;
    border: 1px solid var(--color-background-500);
    background-color: var(--color-primary-700);
    color: var(--color-white-500);
    cursor: pointer;
  }
  button:hover {
    background-color: var(--color-primary-500);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function AttendanceModal({ day, WorkerData, sites }) {
  const { register, handleSubmit, reset } = useForm();
  const { updateAttendance, isLoading } = useWorkerAttendance();

  // Function to organize form data by worker ID
  const organizeFormData = (formData) => {
    const workerData = [];
    const workerIds = new Set();

    Object.keys(formData).forEach((key) => {
      if (key.startsWith("workerId_")) {
        workerIds.add(formData[key]);
      }
    });

    workerIds.forEach((workerId) => {
      const attendanceValue = formData[`attendance_${workerId}`];
      const siteValue = formData[`site_${workerId}`];

      if (isValidWorkerData.call(this, attendanceValue, siteValue)) {
        workerData.push({
          workerId: workerId,
          value: attendanceValue,
          site: siteValue || "",
        });
      }
    });

    return workerData;
  };

  function isValidWorkerData(attendanceValue, siteValue) {
    return (
      attendanceValue &&
      attendanceValue !== " " &&
      siteValue &&
      siteValue !== " "
    );
  }

  const onSubmit = (data) => {
    const organizedData = organizeFormData(data);

    let formattedDate;
    if (day === "Today" || day === "today") {
      formattedDate = new Date().toISOString().split("T")[0];
    } else {
      formattedDate = new Date(day).toISOString().split("T")[0];
    }

    const payload = {
      date: formattedDate,
      workers: organizedData,
    };
    updateAttendance({ payload });

    reset();
  };

  return (
    <ModalContainer>
      <Title>Attendance For {day}</Title>
      <DesktopAttendanceSheet>
        <form onSubmit={handleSubmit(onSubmit)}>
          <table>
            <thead>
              <tr>
                <th>Worker Name</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Night</th>
                <th>Half Day</th>
                <th>Full Present</th>
                <th>Site</th>
              </tr>
            </thead>
            <tbody>
              <RenderRow
                WorkerData={WorkerData}
                register={register}
                day={day}
                sites={sites}
              />
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <input type="submit" value="Submit" disabled={isLoading} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </DesktopAttendanceSheet>

      <MobileAttdanceSheet
        WorkerData={WorkerData}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        day={day}
        isLoading={isLoading}
      />
    </ModalContainer>
  );
}

export default AttendanceModal;
