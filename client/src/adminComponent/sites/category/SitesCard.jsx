import { SiteCardContainer, StyledSiteCard } from "../StyleSites";
import SiteCardDetails from "./SiteCardDetails";

function SitesCard({ sites, workers }) {
  return (
    <StyledSiteCard>
      <SiteCardContainer>
        {sites.map((site) => (
          <SiteCardDetails key={site.id} site={site} workers={workers} />
        ))}
      </SiteCardContainer>
    </StyledSiteCard>
  );
}

export default SitesCard;
