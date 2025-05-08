import styled from "styled-components";
import Heading from "../../../ui/Heading";
import { capitalizeFirstLetter } from "../../../util/helper";

const StyledSeeDesign = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 1rem;
  overflow: auto;
  gap: 1rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
`;

const OwnerDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-background-500);
  border-radius: var(--br-l);
  position: relative;
  border-top: 2px solid var(--color-background-800);
  border-bottom: 2px solid var(--color-background-800);
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SitesDetials = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`;

const WorkType = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  gap: 5rem;
`;

const BuildingDetails = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

function SeeDetails({ site }) {
  return (
    <StyledSeeDesign>
      <OwnerDetails>
        <Heading as="h4"> Owner Details</Heading>
        <Information>
          <p>Name: {capitalizeFirstLetter(site.owner.name)}</p>
          <p>
            Number :{" "}
            <a href={`tel:${site.owner.phone_number}`}>
              {site.owner.phone_number}
            </a>
          </p>
          <p>Payment: {site.payment.totalPayment}</p>
        </Information>
      </OwnerDetails>
      <SitesDetials>
        <WorkType>
          <Heading as="h4">Work Type Details</Heading>
          <p> Work Type:- {site.workType}</p>
        </WorkType>
        <BuildingDetails>
          <Heading as="h4">Building Details</Heading>
          Building for:- {site.buildingDetails.type}
          Area of Building:- {site.buildingDetails.area}
          Number of Floors:- {site.buildingDetails.floor}
          flat Information:- {site.buildingDetails.flatsInfo.rooms}
        </BuildingDetails>
      </SitesDetials>
    </StyledSeeDesign>
  );
}

export default SeeDetails;
