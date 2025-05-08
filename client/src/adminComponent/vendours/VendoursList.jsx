import { StyledVendours } from "./StyleVendours";
import VendourDetails from "./VendourDetails";

function VendoursList({ vendoursData }) {
  return (
    <StyledVendours>
      {vendoursData.map((vendour) => (
        <VendourDetails key={vendour.id} vendour={vendour} />
      ))}
    </StyledVendours>
  );
}

export default VendoursList;
