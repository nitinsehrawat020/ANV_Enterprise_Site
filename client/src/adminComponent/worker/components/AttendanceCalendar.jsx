import styled from "styled-components";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Heading from "../../../ui/Heading";
import PaymentSummary from "./PaymentSummary";
import { device } from "../../../Styles/Theme";

const AttendanceContainer = styled.div`
  grid-area: attendance;
  width: 500px;
  height: 800px;
  background-color: var(--color-background-200);
  border-radius: var(--br-m);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
  }
`;

const CalendarWrapper = styled.div`
  width: 100%;
  background-color: var(--color-background-500);
  border-radius: var(--br-m);
  padding: 1rem;
  box-shadow: var(--shadow-md);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: var(--color-primary-700);
  color: white;
  border-radius: var(--br-s);
`;

const MonthNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.3rem;
  border-radius: var(--br-s);
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-primary-500);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  @media ${device.mobile} {
    display: none;
  }
`;

const MonthYear = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  min-width: 150px;
  text-align: center;
`;

const CalendarDaysHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: bold;
  color: var(--color-primary-700);
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.3rem;
  margin-bottom: 1rem;
`;

const CalendarDay = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--br-s);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  border: 2px solid transparent;

  ${({ status }) => {
    switch (status) {
      case "absent":
        return `
          background-color: #ef4444;
          color: white;
        `;
      case "half_day":
        return `
          background-color: #f59e0b;
          color: white;
        `;
      case "present":
        return `
          background-color: #10b981;
          color: white;
        `;
      case "full_present":
        return `
          background-color: #059669;
          color: white;
        `;
      case "night":
        return `
          background-color: #8b5cf6;
          color: white;
        `;
      case "not_available":
        return `
          background-color: transparent;
          color: var(--color-text-500);
          border: 1px dashed #d1d5db;
        `;
      case "empty":
        return `
          background-color: transparent;
          color: transparent;
          cursor: default;
        `;
      default:
        return `
          background-color: var(--color-background-300);
          color: var(--color-text-500);
        `;
    }
  }}

  ${({ isToday }) =>
    isToday &&
    `
    border-color: var(--color-primary-700);
    box-shadow: 0 0 0 2px var(--color-primary-200);
  `}

  &:hover {
    ${({ status }) =>
      status !== "empty" &&
      `
      transform: scale(1.1);
      box-shadow: var(--shadow-md);
      z-index: 10;
    `}
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-background-800);
  color: white;
  padding: 0.8rem;
  border-radius: var(--br-s);
  font-size: 0.75rem;
  white-space: nowrap;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: all 0.2s ease;
  min-width: 120px;
  text-align: left;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: var(--color-background-800);
  }
`;

const AttendanceLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: var(--br-s);
  background-color: ${({ color }) => color};
`;

function AttendanceCalendar({
  currentDate,
  setCurrentDate,
  calendarDays,
  attendanceColors,
  hoveredDay,
  setHoveredDay,
  paymentSummary,
}) {
  // Helper function to get month names
  const getMonthName = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const goToCurrentMonth = () => {
    setCurrentDate(new Date());
  };

  return (
    <AttendanceContainer>
      <Heading
        as="h4"
        style={{ marginBottom: "1rem", color: "var(--color-primary-700)" }}
      >
        Attendance Calendar
      </Heading>

      <CalendarWrapper>
        <CalendarHeader>
          <MonthNavigation>
            <NavButton onClick={goToPreviousMonth}>
              <IoChevronBack size={18} />
            </NavButton>
            <MonthYear>{getMonthName(currentDate)}</MonthYear>
            <NavButton onClick={goToNextMonth}>
              <IoChevronForward size={18} />
            </NavButton>
          </MonthNavigation>
          <NavButton
            onClick={goToCurrentMonth}
            style={{ fontSize: "0.8rem", padding: "0.3rem 0.8rem" }}
          >
            Today
          </NavButton>
        </CalendarHeader>

        <CalendarDaysHeader>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </CalendarDaysHeader>

        <CalendarGrid>
          {calendarDays.map((dayData, index) => (
            <CalendarDay
              key={index}
              status={dayData.attendance?.status || "no-data"}
              isToday={dayData.isToday}
              onMouseEnter={() => !dayData.isEmpty && setHoveredDay(index)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              {dayData.day}
              {hoveredDay === index &&
                !dayData.isEmpty &&
                dayData.attendance && (
                  <Tooltip show={true}>
                    <div>
                      <strong>Date:</strong>{" "}
                      {dayData.date?.toLocaleDateString()}
                    </div>
                    <div>
                      <strong>Status:</strong> {dayData.attendance.status}
                    </div>
                    {dayData.attendance.originalValue && (
                      <div>
                        <strong>Original:</strong>{" "}
                        {dayData.attendance.originalValue}
                      </div>
                    )}
                    <div>
                      <strong>Site:</strong> {dayData.attendance.site}
                    </div>
                    <div>
                      <strong>Hours:</strong> {dayData.attendance.hours}h
                    </div>
                    {dayData.attendance.notes && (
                      <div>
                        <strong>Notes:</strong> {dayData.attendance.notes}
                      </div>
                    )}
                  </Tooltip>
                )}
            </CalendarDay>
          ))}
        </CalendarGrid>

        <AttendanceLegend>
          {Object.entries(attendanceColors).map(([status, color]) => (
            <LegendItem key={status}>
              <LegendColor
                color={color === "transparent" ? "#d1d5db" : color}
              />
              <span>
                {status === "half_day"
                  ? "Half Day"
                  : status === "full_present"
                  ? "Full Present"
                  : status === "not_available"
                  ? "Not Available"
                  : status === "no-data"
                  ? "No Data"
                  : status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </LegendItem>
          ))}
        </AttendanceLegend>
      </CalendarWrapper>

      <PaymentSummary paymentSummary={paymentSummary} />
    </AttendanceContainer>
  );
}

export default AttendanceCalendar;
