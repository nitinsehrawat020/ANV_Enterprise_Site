import { Main } from ".";
import CardContainer from "../component/design/CardContainer";
import DesignCard from "../component/design/DesignCard";
import {
  Category,
  StyleCardContainer,
} from "../component/design/styleDesignFalseCeil";
import TitleContainer from "../component/design/TitleContainer";
import { useMolding } from "../component/design/useDesign";
import FiltersAndCategory from "../ui/FiltersAndCategory";
import Pagination from "../ui/Pagination";

function DesignMolding() {
  const { moldingDesign, isLoading } = useMolding();
  return (
    <>
      <Main>
        <TitleContainer title="Molding Design" />

        <StyleCardContainer>
          <Category>
            <FiltersAndCategory />
          </Category>
          <DesignCard data={moldingDesign} isLoading={isLoading} />
        </StyleCardContainer>
      </Main>
    </>
  );
}

export default DesignMolding;
