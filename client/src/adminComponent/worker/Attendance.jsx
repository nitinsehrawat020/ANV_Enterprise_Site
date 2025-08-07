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
import { BsChevronBarDown, BsChevronBarUp } from "react-icons/bs";

function Attendance({ workers, sites }) {
  const [attendanceDropdown, setAttendanceDropdown] = useState(false);
  const ref = useOutsideClick(() => setAttendanceDropdown(false));

  const WorkersAttendance = useMemo(() => {
    return workers.map((worker) => {
      const notAvailableDays = [];

      if (worker.attendance?.attendanceData) {
        worker.attendance.attendanceData.forEach((monthData) => {
          if (monthData.data && Array.isArray(monthData.data)) {
            monthData.data.forEach((dayData) => {
              if (dayData.value === "not_available") {
                const formattedDate = new Date(dayData.date)
                  .toISOString()
                  .split("T")[0];
                notAvailableDays.push(formattedDate);
              }
            });
          }
        });
      }

      return {
        name: worker.name,
        notAvailableDays,
      };
    });
  }, [workers]);

  const uniqueNotAvailableDays = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];

    const daysSet = new Set();
    WorkersAttendance.forEach((worker) => {
      worker.notAvailableDays.forEach((day) => {
        if (day < today) {
          daysSet.add(day);
        }
      });
    });
    return [...daysSet].sort();
  }, [WorkersAttendance]);

  return (
    <AttendanceContainer>
      <AttendanceBox attendanceDropdown={attendanceDropdown}>
        <PendingListButton
          onClick={() => setAttendanceDropdown((prev) => !prev)}
        >
          Attendance ({uniqueNotAvailableDays.length})
          {!attendanceDropdown ? <BsChevronBarDown /> : <BsChevronBarUp />}
        </PendingListButton>

        {attendanceDropdown && (
          <PendingList ref={ref}>
            <Modal.Open opens="TodayAttendance">
              <AttendanceButton>Today Attendance</AttendanceButton>
            </Modal.Open>

            {uniqueNotAvailableDays.length > 0 ? (
              uniqueNotAvailableDays.map((day, index) => (
                <Modal.Open key={index} opens={day}>
                  <AttendanceButton>
                    {new Date(day).toLocaleDateString()}(
                    {new Date(day).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                    )
                  </AttendanceButton>
                </Modal.Open>
              ))
            ) : (
              <AttendanceButton disabled>
                No pending attendance issues
              </AttendanceButton>
            )}
          </PendingList>
        )}

        <Modal.Window name="TodayAttendance">
          <AttendanceModal WorkerData={workers} day="Today" sites={sites} />
        </Modal.Window>

        {uniqueNotAvailableDays.map((day, index) => (
          <Modal.Window key={index} name={day}>
            <AttendanceModal WorkerData={workers} day={day} sites={sites} />
          </Modal.Window>
        ))}
      </AttendanceBox>
    </AttendanceContainer>
  );
}

export default Attendance;
