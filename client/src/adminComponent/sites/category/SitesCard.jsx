import { useSite } from "../../../hooks/useSite";
import Spinner from "../../../ui/Spinner";
import { SiteCardContainer, StyledSiteCard } from "../StyleSites";
import SiteCardDetails from "./SiteCardDetails";

function SitesCard({ workers = [] }) {
  const { sites, isLoading, error } = useSite();
  if (isLoading) return <Spinner />;

  return (
    <StyledSiteCard>
      <SiteCardContainer>
        {sites.map((site) => (
          <SiteCardDetails key={site._id} site={site} workers={workers} />
        ))}
      </SiteCardContainer>
    </StyledSiteCard>
  );
}

export default SitesCard;
