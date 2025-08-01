import DesignTemplete from "../../component/design/DesignTemplete";
import { useMolding } from "../../hooks/useDesign";

function MoldingDesign() {
  const { moldingDesigns, isMoldingLoading } = useMolding();

  console.log(moldingDesigns);

  return (
    <DesignTemplete
      type={"Molding Design"}
      designs={moldingDesigns}
      isDesignLoading={isMoldingLoading}
    />
  );
}

export default MoldingDesign;
