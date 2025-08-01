import DesignTemplete from "../../component/design/DesignTemplete";
import { useFalseCeil } from "../../hooks/useDesign";

function FalseCeilDesign() {
  const { falseCeilDesigns, isFalseceilLoading } = useFalseCeil();
  return (
    <DesignTemplete
      type={"False Ceil Design"}
      designs={falseCeilDesigns}
      isDesignLoading={isFalseceilLoading}
    />
  );
}

export default FalseCeilDesign;
