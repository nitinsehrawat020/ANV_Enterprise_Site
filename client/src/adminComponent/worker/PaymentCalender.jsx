import { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  width: 280px;
  background-color: var(--color-background-500);
  border-radius: var(--br-m);
  padding: 0.5rem;
  font-size: 0.85rem;
`;

const CalendarLayout = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SideHeader = styled.div`
  width: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 0.5rem;

  background-color: var(--color-background-700);
  border-radius: var(--br-m);
  padding: 0.3rem;
  box-shadow: var(--shadow-sm);
`;

const MonthYearDisplay = styled.div`
  font-size: 0.9rem;
  color: var(--color-white-500);
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  text-align: center;
`;

const NavButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const NavButton = styled.button`
  background-color: var(--color-primary-500);
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &:hover {
    background-color: var(--color-primary-600);
  }
`;

const CalendarGrid = styled.div`
  flex: 1;
`;

const WeekdayHeader = styled.div`
  height: 28px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 0.2rem;
  background-color: var(--color-background-700);
  border-radius: var(--br-s);
`;

const WeekdayLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 0.7rem;
  color: var(--color-grey-300);
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;

const DayCell = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  border-radius: 4px;
  position: relative;
  opacity: ${(props) => (props.isCurrentMonth ? 1 : 0.3)};

  /* Color based on payment status */
  background-color: ${(props) => {
    if (props.isToday) return "var(--color-primary-700)";
    if (!props.isCurrentMonth) return "var(--color-background-300)";
    if (props.isPaid) return "green";
    return "var(--color-background-200)";
  }};

  /* Text color */
  color: ${(props) =>
    props.isCurrentMonth ? "white" : "var(--color-grey-400)"};
  cursor: ${(props) => (props.isCurrentMonth ? "pointer" : "default")};

  &:hover {
    ${(props) => props.isCurrentMonth && "filter: brightness(1.1);"}
  }
`;

// Format date to DD/MM/YYYY (e.g., 02/03/2025)
const formatDateDDMMYYYY = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

function PaymentCalender({ paymentDates = [] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);

  // Memoize the payment dates set
  const paymentDatesSet = useMemo(() => new Set(paymentDates), [paymentDates]);

  const generateCalendarDays = useCallback(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the current month
    const firstDay = new Date(year, month, 1);
    // Last day of the current month
    const lastDay = new Date(year, month + 1, 0);
    // First day of the week of the first day (Sunday = 0)
    const firstDayOfWeek = firstDay.getDay();

    const days = [];

    // Add days from previous month to fill calendar
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthLastDay - i);
      const dateString = formatDateDDMMYYYY(date);
      days.push({
        date: prevMonthLastDay - i,
        fullDate: date,
        isCurrentMonth: false,
        isToday: false,
        isPaid: paymentDatesSet.has(dateString),
      });
    }

    // Add days from current month
    const today = new Date();
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      const dateString = formatDateDDMMYYYY(date);
      const isToday =
        i === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

      days.push({
        date: i,
        fullDate: date,
        isCurrentMonth: true,
        isToday,
        isPaid: paymentDatesSet.has(dateString),
      });
    }

    // Calculate remaining days needed to complete the grid
    const remainingCells =
      Math.ceil((firstDayOfWeek + lastDay.getDate()) / 7) * 7 -
      (firstDayOfWeek + lastDay.getDate());

    // Add days from next month
    for (let i = 1; i <= remainingCells; i++) {
      const date = new Date(year, month + 1, i);
      const dateString = formatDateDDMMYYYY(date);
      days.push({
        date: i,
        fullDate: date,
        isCurrentMonth: false,
        isToday: false,
        isPaid: paymentDatesSet.has(dateString),
      });
    }

    setCalendarDays(days);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  useEffect(() => {
    generateCalendarDays();
  }, [currentDate, generateCalendarDays]);

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <CalendarContainer>
      <CalendarLayout>
        <SideHeader>
          <NavButtons>
            <NavButton onClick={prevMonth}>↑</NavButton>
          </NavButtons>
          <MonthYearDisplay>
            {currentDate.toLocaleString("default", {
              month: "short",
              year: "numeric",
            })}
          </MonthYearDisplay>
          <NavButtons>
            <NavButton onClick={nextMonth}>↓</NavButton>
          </NavButtons>
        </SideHeader>

        <CalendarGrid>
          <WeekdayHeader>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <WeekdayLabel key={day}>{day}</WeekdayLabel>
            ))}
          </WeekdayHeader>

          <DaysGrid>
            {calendarDays.map((day, index) => (
              <DayCell
                key={index}
                isCurrentMonth={day.isCurrentMonth}
                isToday={day.isToday}
                isPaid={day.isPaid}
                title={
                  day.isPaid
                    ? `${formatDateDDMMYYYY(day.fullDate)}: Payment Made`
                    : formatDateDDMMYYYY(day.fullDate)
                }
              >
                {day.date}
              </DayCell>
            ))}
          </DaysGrid>
        </CalendarGrid>
      </CalendarLayout>
    </CalendarContainer>
  );
}

export default PaymentCalender;
