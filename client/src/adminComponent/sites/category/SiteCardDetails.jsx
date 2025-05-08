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
import Modal from "../../../ui/Modal";
import SiteModal from "./SiteModal";

function SiteCardDetails({ site, workers }) {
  const siteWorkerList = workers.filter((worker) => {
    return Object.values(worker.attendance).at(-1).site === site.name;
  });

  return (
    <Modal>
      <Modal.Open open="siteCard">
        <StyleSiteCard>
          <InnerBorder>
            <Heading as="h3">{capitalizeFirstLetter(site.name)}</Heading>
            <Graphs>
              <WorkProgress>
                <Heading as="h4">Work Progress</Heading>
                <Circle
                  percent={site.workProgress}
                  strokeWidth={10}
                  trailWidth={8}
                  trailColor="var(--color-background-500)"
                  strokeColor="var(--color-primary-500)"
                  gapDegree={0}
                  gapPosition="bottom"
                  strokeLinecap="round"
                  style={{ width: "60px" }}
                />
                <p>{site.workProgress}</p>
              </WorkProgress>
              <InventoryStatus>
                <Heading as="h4">Inventory</Heading>
              </InventoryStatus>
            </Graphs>
            <LastPayment>
              <Heading as="h4">Last Payment:-</Heading>
              <p>{site.paymentLog.at(-1).date}</p>
            </LastPayment>
            <LastWorkerContainer>
              <Heading as="h4">Last Workers</Heading>
              <LastWorkerList>
                {siteWorkerList.map((worker) => (
                  <p key={worker.id}>{worker.name}</p>
                ))}
              </LastWorkerList>
            </LastWorkerContainer>
            <InformationSection>
              <Payment>
                Payment Received:-{" "}
                {formatCurrencty(+site.payment.receivedPayment)}
              </Payment>
              <LastWorkingDay> Last Working Day:- </LastWorkingDay>
            </InformationSection>
          </InnerBorder>
        </StyleSiteCard>
      </Modal.Open>

      <Modal.Window open="siteCard">
        <SiteModal site={site} workers={workers} />
      </Modal.Window>
    </Modal>
  );
}

export default SiteCardDetails;
