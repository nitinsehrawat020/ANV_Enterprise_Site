import { useState } from "react";
import { useSite } from "../../../hooks/useSite";
import Spinner from "../../../ui/Spinner";
import { SiteCardContainer, StyledSiteCard } from "../StyleSites";
import SiteCardDetails from "./SiteCardDetails";
import SiteModal from "./SiteModal";
import { capitalizeFirstLetter } from "../../../util/helper";

function SitesCard({ activeCategory }) {
  const { sites, isLoading, error } = useSite();
  const [selectedSiteId, setSelectedSiteId] = useState(null);
  if (isLoading) return <Spinner />;

  const filterSites =
    activeCategory === "All"
      ? sites
      : sites.filter(
          (site) => capitalizeFirstLetter(site.status) === activeCategory
        );

  const selectedSite = selectedSiteId
    ? filterSites.find((site) => site._id === selectedSiteId)
    : null;

  if (!filterSites) return <div>No site to display </div>;

  return (
    <StyledSiteCard>
      <SiteCardContainer>
        {!selectedSiteId &&
          filterSites.map((site) => (
            <SiteCardDetails
              key={site._id}
              onClick={() => setSelectedSiteId(site._id)}
              site={site}
            />
          ))}

        {selectedSite && (
          <SiteModal
            key={selectedSiteId}
            site={selectedSite}
            onClose={() => setSelectedSiteId(null)}
          />
        )}
      </SiteCardContainer>
    </StyledSiteCard>
  );
}

export default SitesCard;
