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
  const { data, isLoading } = useFalseCeil();

  return (
    <>
      <Main>
        <TitleContainer title="False Ceil Design" />

        <StyleCardContainer>
          <Category>
            <FiltersAndCategory />
          </Category>
          <DesignCard data={data} isLoading={isLoading} />
        </StyleCardContainer>
      </Main>
    </>
  );
}

export default DesignForeCeil;
