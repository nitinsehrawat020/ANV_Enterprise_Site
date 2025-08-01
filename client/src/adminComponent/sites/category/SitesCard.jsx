import { useState } from "react";
import { useSite } from "../../../hooks/useSite";
import Spinner from "../../../ui/Spinner";
import { SiteCardContainer, StyledSiteCard } from "../StyleSites";
import SiteCardDetails from "./SiteCardDetails";
import SiteModal from "./SiteModal";
import { capitalizeFirstLetter } from "../../../util/helper";
import { useSearchParams } from "react-router-dom";

function SitesCard() {
  const { sites, isLoading } = useSite();
  const [selectedSiteId, setSelectedSiteId] = useState(null);
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const category = searchParams.get("filter");

  const filterSites =
    category === "All"
      ? sites
      : sites.filter((site) => capitalizeFirstLetter(site.status) === category);

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
