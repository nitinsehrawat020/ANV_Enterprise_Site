import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useState } from "react";
import { CloseButton } from "../vendours/StyleVendours";
import { IoArrowBack } from "react-icons/io5";
import { capitalizeFirstLetter } from "../../util/helper";
import AttendanceCalendar from "./components/AttendanceCalendar";
import RecentPayments from "./components/RecentPayments";
import WorkerInformation from "./components/WorkerInformation";
import {
  processAttendanceData,
  calculatePaymentSummary,
  generateCalendarDays,
  attendanceColors,
} from "./utils/attendanceUtils";

const ModalContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40px auto auto;
  grid-template-areas:
    "title title"
    "attendance paymentInfo"
    "attendance payment";
  gap: 1rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 40px repeat(4, auto);
    grid-template-areas:
      "title"
      "attendance"
      "inventory"
      "payment"
      "paymentInfo";
    overflow: scroll;
  }
`;

const Header = styled.div`
  grid-area: title;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;

  border-radius: var(--br-l);
  box-shadow: var(--shadow-md);
  padding: 0.5rem;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function WorkerDetailsModal({ worker, onClose }) {
  const [hoveredDay, setHoveredDay] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Process attendance data
  const attendanceData = processAttendanceData(worker, currentDate);
  const calendarDays = generateCalendarDays(currentDate, attendanceData);
  const paymentSummary = calculatePaymentSummary(worker, currentDate);

  return (
    <ModalContainer>
      <Header>
        <CloseButton onClick={onClose}>
          <IoArrowBack />
        </CloseButton>{" "}
        <Title>
          <Heading as="h3">{capitalizeFirstLetter(worker.name)}</Heading>
        </Title>
      </Header>

      <AttendanceCalendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        calendarDays={calendarDays}
        attendanceColors={attendanceColors}
        hoveredDay={hoveredDay}
        setHoveredDay={setHoveredDay}
        paymentSummary={paymentSummary}
      />

      <RecentPayments worker={worker} />

      <WorkerInformation
        worker={worker}
        calendarDays={calendarDays}
        currentDate={currentDate}
      />
    </ModalContainer>
  );
}

export default WorkerDetailsModal;
