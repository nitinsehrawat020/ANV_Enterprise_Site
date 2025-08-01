import { capitalizeFirstLetter, formatCurrencty } from "../../../util/helper";
import {
  Graphs,
  InformationSection,
  InnerBorder,
  InventoryStatus,
  LastPayment,
  LastWorkerContainer,
  LastWorkerList,
  LastWorkingDay,
  Payment,
  StyleSiteCard,
  WorkProgress,
} from "../StyleSites";
import Heading from "../../../ui/Heading";
import { Circle } from "rc-progress";
import { useWorker } from "../../../hooks/useWorker";
import styled from "styled-components";

// Enhanced styled components for better UI/UX
const EnhancedSiteCard = styled(StyleSiteCard)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 350px;
  height: 400px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${(props) =>
      props.status === "Complete"
        ? "var(--color-succes)"
        : props.status === "Active"
        ? "var(--color-primary-500)"
        : props.status === "Upcoming"
        ? "var(--color-warning)"
        : "var(--color-background-500)"};
  }

  /* Large Desktop (1440px+) */
  @media (min-width: 1440px) {
    width: 380px;
    height: 420px;
    padding: 1.2rem;
  }

  /* Desktop (1024px - 1439px) */
  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 350px;
    height: 400px;
    padding: 1rem;
  }

  /* Tablet (768px - 1023px) */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 300px;
    height: 380px;
    padding: 0.9rem;
  }

  /* Mobile Landscape (425px - 767px) */
  @media (min-width: 425px) and (max-width: 767px) {
    width: 100%;
    max-width: 400px;
    height: 350px;
    padding: 0.8rem;
    margin: 0 auto;
  }

  /* Mobile Portrait (≤424px) */
  @media (max-width: 424px) {
    width: 100%;
    max-width: 320px;
    height: 380px;
    padding: 0.7rem;
    margin: 0 auto;
  }

  /* Small Height Screens */
  @media (max-height: 600px) and (orientation: landscape) {
    height: 320px;
    padding: 0.6rem;
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem 0.8rem;
  border-radius: var(--br-l);
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${(props) =>
    props.status === "Complete"
      ? "var(--color-succes)"
      : props.status === "Active"
      ? "var(--color-primary-500)"
      : props.status === "Upcoming"
      ? "var(--color-warning)"
      : "var(--color-background-500)"};
  color: var(--color-white-500);
  box-shadow: var(--shadow-sm);

  /* Large Desktop */
  @media (min-width: 1440px) {
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.7rem;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.65rem;
  }

  /* Mobile */
  @media (max-width: 767px) {
    top: 0.7rem;
    right: 0.7rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.6rem;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;

  h3 {
    margin: 0;
    color: var(--color-primary-700);
    font-weight: 600;
    font-size: 1.2rem;
  }

  /* Large Desktop */
  @media (min-width: 1440px) {
    margin-bottom: 1.2rem;

    h3 {
      font-size: 1.3rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1439px) {
    margin-bottom: 1rem;

    h3 {
      font-size: 1.2rem;
    }
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 0.8rem;

    h3 {
      font-size: 1.1rem;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    margin-bottom: 0.7rem;

    h3 {
      font-size: 1rem;
    }
  }

  /* Small Mobile */
  @media (max-width: 424px) {
    margin-bottom: 0.6rem;

    h3 {
      font-size: 0.9rem;
    }
  }
`;

const ProgressContainer = styled(WorkProgress)`
  position: relative;
  --circle-size: 70px;

  .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 0.8rem;
    color: var(--color-primary-600);
  }

  .circle-wrapper {
    width: var(--circle-size);
    height: var(--circle-size);
  }

  h4 {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  /* Large Desktop */
  @media (min-width: 1440px) {
    --circle-size: 80px;

    .progress-text {
      font-size: 0.9rem;
    }

    h4 {
      font-size: 1rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1439px) {
    --circle-size: 70px;

    .progress-text {
      font-size: 0.8rem;
    }

    h4 {
      font-size: 0.9rem;
    }
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    --circle-size: 60px;

    .progress-text {
      font-size: 0.7rem;
    }

    h4 {
      font-size: 0.8rem;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    --circle-size: 50px;

    .progress-text {
      font-size: 0.65rem;
    }

    h4 {
      font-size: 0.75rem;
      margin-bottom: 0.3rem;
    }
  }

  /* Small Mobile */
  @media (max-width: 424px) {
    --circle-size: 45px;

    .progress-text {
      font-size: 0.6rem;
    }

    h4 {
      font-size: 0.7rem;
      margin-bottom: 0.25rem;
    }
  }
`;

const InventoryContainer = styled(InventoryStatus)`
  h4 {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  /* Large Desktop */
  @media (min-width: 1440px) {
    h4 {
      font-size: 1rem;
      margin-bottom: 0.6rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1439px) {
    h4 {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    h4 {
      font-size: 0.8rem;
      margin-bottom: 0.4rem;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    h4 {
      font-size: 0.75rem;
      margin-bottom: 0.3rem;
    }
  }

  /* Small Mobile */
  @media (max-width: 424px) {
    h4 {
      font-size: 0.7rem;
      margin-bottom: 0.25rem;
    }
  }
`;

const InventoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  width: 100%;

  /* Large Desktop */
  @media (min-width: 1440px) {
    gap: 0.6rem;
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1439px) {
    gap: 0.5rem;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 0.4rem;
  }

  /* Mobile */
  @media (max-width: 767px) {
    gap: 0.3rem;
    grid-template-columns: 1fr;
  }

  /* Small Mobile */
  @media (max-width: 424px) {
    gap: 0.25rem;
  }
`;

const InventoryItem = styled.div`
  background-color: var(--color-background-600);
  padding: 0.5rem;
  border-radius: var(--br-s);
  text-align: center;
  font-size: 0.7rem;

  .label {
    color: var(--color-text-400);
    font-size: 0.6rem;
    margin-bottom: 0.2rem;
  }

  .value {
    font-weight: bold;
    color: var(--color-primary-600);
  }

  /* Large Desktop */
  @media (min-width: 1440px) {
    padding: 0.6rem;
    font-size: 0.75rem;

    .label {
      font-size: 0.65rem;
      margin-bottom: 0.25rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 0.5rem;
    font-size: 0.7rem;

    .label {
      font-size: 0.6rem;
      margin-bottom: 0.2rem;
    }
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0.4rem;
    font-size: 0.65rem;

    .label {
      font-size: 0.55rem;
      margin-bottom: 0.15rem;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    padding: 0.3rem;
    font-size: 0.6rem;

    .label {
      font-size: 0.5rem;
      margin-bottom: 0.1rem;
    }
  }

  /* Small Mobile */
  @media (max-width: 424px) {
    padding: 0.25rem;
    font-size: 0.55rem;

    .label {
      font-size: 0.45rem;
      margin-bottom: 0.05rem;
    }
  }
`;

const EnhancedLastPayment = styled(LastPayment)`
  background-color: var(--color-background-600);
  border-radius: var(--br-m);
  padding: 0.8rem;

  p {
    margin: 0;
    font-weight: 500;
    color: var(--color-succes);
    font-size: 0.75rem;
  }

  h4 {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  /* Large Desktop */
  @media (min-width: 1440px) {
    padding: 1rem;

    p {
      font-size: 0.8rem;
    }

    h4 {
      font-size: 1rem;
      margin-bottom: 0.4rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 0.8rem;

    p {
      font-size: 0.75rem;
    }

    h4 {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0.6rem;

    p {
      font-size: 0.7rem;
    }

    h4 {
      font-size: 0.8rem;
      margin-bottom: 0.25rem;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    padding: 0.5rem;

    p {
      font-size: 0.65rem;
    }

    h4 {
      font-size: 0.75rem;
      margin-bottom: 0.2rem;
    }
  }

  /* Small Mobile */
  @media (max-width: 424px) {
    padding: 0.4rem;

    p {
      font-size: 0.6rem;
    }

    h4 {
      font-size: 0.7rem;
      margin-bottom: 0.15rem;
    }
  }
`;

const WorkerBadge = styled.span`
  background: linear-gradient(
    135deg,
    var(--color-primary-500),
    var(--color-primary-600)
  );
  color: var(--color-white-500);
  padding: 0.3rem 0.6rem;
  border-radius: var(--br-l);
  font-size: 0.65rem;
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease;
  display: inline-block;
  margin: 0.1rem;

  &:hover {
    transform: scale(1.05);
  }

  /* Large Desktop */
  @media (min-width: 1440px) {
    padding: 0.35rem 0.7rem;
    font-size: 0.7rem;
    margin: 0.15rem;
  }

  /* Desktop */
  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.65rem;
    margin: 0.1rem;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.6rem;
    margin: 0.08rem;
  }

  /* Mobile */
  @media (max-width: 767px) {
    padding: 0.2rem 0.4rem;
    font-size: 0.55rem;
    margin: 0.05rem;
  }

  /* Small Mobile */
  @media (max-width: 424px) {
    padding: 0.15rem 0.3rem;
    font-size: 0.5rem;
    margin: 0.03rem;
  }
`;

const EnhancedWorkerList = styled(LastWorkerList)`
  p {
    all: unset;
  }
`;

const PaymentInfo = styled(Payment)`
  background: linear-gradient(135deg, var(--color-succes), #059669);
  color: var(--color-white-500);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

const WorkingDayInfo = styled(LastWorkingDay)`
  background-color: var(--color-background-600);
  color: var(--color-primary-600);
  font-weight: 500;
`;

function SiteCardDetails({ site, onClick }) {
  const { workers, isLoading: isWorkerLoading } = useWorker();

  if (isWorkerLoading) return;

  const siteWorkerList = workers.filter((worker) => {
    return Object.values(worker.attendance).at(-1)?.site === site.name;
  });

  // Calculate days since last payment
  const lastPaymentDate = site?.paymentLog?.at(-1)?.date;
  const daysSincePayment = lastPaymentDate
    ? Math.floor(
        (Date.now() - new Date(lastPaymentDate)) / (1000 * 60 * 60 * 24)
      )
    : null;

  // Get last working day
  const lastWorkingDay =
    siteWorkerList.length > 0
      ? Object.keys(siteWorkerList[0]?.attendance || {}).at(-1)
      : null;

  return (
    <EnhancedSiteCard onClick={onClick} status={site.status}>
      <StatusBadge status={site.status}>{site.status || "Unknown"}</StatusBadge>

      <InnerBorder>
        <CardHeader>
          <Heading as="h3">{capitalizeFirstLetter(site.name)}</Heading>
        </CardHeader>

        <Graphs>
          <ProgressContainer>
            <Heading as="h4">Work Progress</Heading>
            <div className="circle-wrapper" style={{ position: "relative" }}>
              <Circle
                percent={site.workProgress || 0}
                strokeWidth={12}
                trailWidth={8}
                trailColor="var(--color-background-500)"
                strokeColor="var(--color-primary-500)"
                gapDegree={0}
                gapPosition="bottom"
                strokeLinecap="round"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="progress-text">{site.workProgress || 0}%</div>
            </div>
          </ProgressContainer>

          <InventoryContainer>
            <Heading as="h4">Inventory</Heading>
            <InventoryGrid>
              <InventoryItem>
                <div className="label">Materials</div>
                <div className="value">{site.materials || "N/A"}</div>
              </InventoryItem>
              <InventoryItem>
                <div className="label">Tools</div>
                <div className="value">{site.tools || "N/A"}</div>
              </InventoryItem>
            </InventoryGrid>
          </InventoryContainer>
        </Graphs>

        <EnhancedLastPayment>
          <Heading as="h4">Last Payment</Heading>
          <p>
            {lastPaymentDate
              ? `${new Date(
                  lastPaymentDate
                ).toLocaleDateString()} (${daysSincePayment} days ago)`
              : "No Payment Yet"}
          </p>
        </EnhancedLastPayment>

        <LastWorkerContainer>
          <Heading as="h4">Active Workers ({siteWorkerList.length})</Heading>
          <EnhancedWorkerList>
            {siteWorkerList.length > 0 ? (
              siteWorkerList.map((worker) => (
                <WorkerBadge key={worker.id}>{worker.name}</WorkerBadge>
              ))
            ) : (
              <span
                style={{ color: "var(--color-text-400)", fontSize: "0.8rem" }}
              >
                No active workers
              </span>
            )}
          </EnhancedWorkerList>
        </LastWorkerContainer>

        <InformationSection>
          <PaymentInfo>
            💰 Received: {formatCurrencty(+site?.payment?.receivedPayment || 0)}
          </PaymentInfo>
          <WorkingDayInfo>
            📅 Last Work:{" "}
            {lastWorkingDay
              ? new Date(lastWorkingDay).toLocaleDateString()
              : "N/A"}
          </WorkingDayInfo>
        </InformationSection>
      </InnerBorder>
    </EnhancedSiteCard>
  );
}

export default SiteCardDetails;
