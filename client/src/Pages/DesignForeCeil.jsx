import { Main } from ".";

import DesignCard from "../component/design/DesignCard";
import {
  Category,
  StyleCardContainer,
} from "../component/design/styleDesignFalseCeil";
import TitleContainer from "../component/design/TitleContainer";
import { useFalseCeil } from "../component/design/useDesign";
import FiltersAndCategory from "../ui/FiltersAndCategory";

function DesignForeCeil() {
  return (
    <>
      <Main>
        <TitleContainer title="False Ceil Design" />

        <StyleCardContainer>
          <Category>
            <FiltersAndCategory />
          </Category>
          <DesignCard />
        </StyleCardContainer>
      </Main>
    </>
  );
}

export default DesignForeCeil;
