import { useState, useMemo } from "react";
import {
  AttendanceBox,
  AttendanceContainer,
  AttendanceButton,
  PendingListButton,
  PendingList,
} from "./StyleWorker";
import Modal from "../../ui/Modal";
import AttendanceModal from "./AttendanceModal";
import { useOutsideClick } from "../../hooks/useOutsideClick.jsx";

function Attendance({ WorkerData, sites }) {
  const [attendanceDropdown, setAttendanceDropdown] = useState(false);
  const ref = useOutsideClick(() => setAttendanceDropdown(false));

  const WorkersAttendance = useMemo(() => {
    return WorkerData.map((worker) => {
      const notAvailableDays = Object.keys(worker.attendance).filter(
        (date) => worker.attendance[date].value === "not_available"
      );
      return {
        name: worker.name,
        notAvailableDays,
      };
    });
  }, [WorkerData]);

  const uniqueNotAvailableDays = useMemo(() => {
    const daysSet = new Set();
    WorkersAttendance.forEach((worker) => {
      worker.notAvailableDays.forEach((day) => {
        daysSet.add(day);
      });
    });
    return [...daysSet];
  }, [WorkersAttendance]);

  return (
    <AttendanceContainer>
      Attendance:-
      <AttendanceBox attendanceDropdown={attendanceDropdown}>
        <PendingListButton
          onClick={() => setAttendanceDropdown((prev) => !prev)}
        >
          View Pending List
        </PendingListButton>
        {attendanceDropdown && (
          <PendingList ref={ref}>
            <Modal.Open opens="TodayAttendance">
              <AttendanceButton>Today Attendance</AttendanceButton>
            </Modal.Open>
            {uniqueNotAvailableDays.map((day, index) => (
              <Modal.Open key={index} opens={day}>
                <AttendanceButton>{day}</AttendanceButton>
              </Modal.Open>
            ))}
          </PendingList>
        )}

        <Modal.Window name="TodayAttendance">
          <AttendanceModal WorkerData={WorkerData} day="Today" sites={sites} />
        </Modal.Window>
        {uniqueNotAvailableDays.map((day, index) => (
          <Modal.Window key={index} name={day}>
            <AttendanceModal WorkerData={WorkerData} day={day} sites={sites}>
              {day}
            </AttendanceModal>
          </Modal.Window>
        ))}
      </AttendanceBox>
    </AttendanceContainer>
  );
}

export default Attendance;
