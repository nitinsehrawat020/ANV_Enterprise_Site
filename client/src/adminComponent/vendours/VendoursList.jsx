import { useState } from "react";
import { useGetVendour } from "../../hooks/useVendour";
import { capitalizeFirstLetter } from "../../util/helper";
import { StyledVendours, InnerBox, VendoursBox } from "./StyleVendours";

import VendourModal from "./VendourModal";

function VendoursList() {
  const [selectesVendour, setSelectedVendour] = useState("");

  const { vendour, isLoading } = useGetVendour();

  if (isLoading) return;
  return (
    <StyledVendours>
      {!selectesVendour ? (
        vendour.map((vendour) => (
          <VendoursBox
            key={vendour._id}
            onClick={() => setSelectedVendour(vendour)}
          >
            <InnerBox>
              <h3>{capitalizeFirstLetter(vendour.name)}</h3>
              <p>Phone: {vendour.phoneNumber}</p>
            </InnerBox>
          </VendoursBox>
        ))
      ) : (
        <VendourModal
          vendour={selectesVendour}
          onClose={() => setSelectedVendour("")}
        />
      )}
    </StyledVendours>
  );
}

export default VendoursList;
