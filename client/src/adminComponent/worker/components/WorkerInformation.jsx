import styled from "styled-components";
import Heading from "../../../ui/Heading";

const WorkerInfoContainer = styled.div`
  grid-area: paymentInfo;
  width: 500px;
  height: 350px;
  background-color: var(--color-background-200);
  border-radius: var(--br-m);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-m);
  padding: 1rem;
  height: 100%;
  font-size: 0.85rem;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;
  background-color: var(--color-background-300);
  border-radius: var(--br-s);
`;

const InfoValue = styled.span`
  font-weight: bold;
`;

function WorkerInformation({ worker, calendarDays, currentDate }) {
  return (
    <WorkerInfoContainer>
      <Heading
        as="h4"
        style={{ marginBottom: "1rem", color: "var(--color-primary-700)" }}
      >
        Worker Information
      </Heading>
      <InfoContainer>
        <InfoRow>
          <span>Worker ID:</span>
          <InfoValue>{worker.id || "N/A"}</InfoValue>
        </InfoRow>
        <InfoRow>
          <span>Phone:</span>
          <InfoValue>{worker.phone || "N/A"}</InfoValue>
        </InfoRow>
        <InfoRow>
          <span>Daily Rate:</span>
          <InfoValue>₹{worker.dailyRate || "N/A"}</InfoValue>
        </InfoRow>
        <InfoRow>
          <span>Working Days:</span>
          <InfoValue>
            {
              calendarDays.filter(
                (d) =>
                  !d.isEmpty &&
                  d.attendance?.status &&
                  d.attendance.status !== "no-data" &&
                  d.attendance.status !== "absent"
              ).length
            }
          </InfoValue>
        </InfoRow>
        <InfoRow>
          <span>Current Month:</span>
          <InfoValue>
            {currentDate.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </InfoValue>
        </InfoRow>
      </InfoContainer>
    </WorkerInfoContainer>
  );
}

export default WorkerInformation;
