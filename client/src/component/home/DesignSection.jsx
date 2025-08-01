import { useState } from "react";

import { CategorySelector } from "../../ui/CategorySelector";
import { ImageCarousel } from "../../ui/ImageCarousel";

import { DESIGN_DATA } from "../../util/constants";
import { DesignCategory } from "../../util/types";
import {
  AppContainer,
  CarouselContainer,
  ContentWrapper,
  Header,
  MainContent,
  Subtitle,
  Title,
} from "./styleHome.jsx";

function DesignSection() {
  const [activeCategory, setActiveCategory] = useState(
    DesignCategory.FalseCeiling
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const activeImages = DESIGN_DATA[activeCategory];

  return (
    <AppContainer>
      <ContentWrapper>
        <Header>
          <Title>Dive Deeper Into Our Designs</Title>
          <Subtitle>
            From Concept to Completion, we make designs that fit every style and
            budget.
          </Subtitle>
        </Header>

        <MainContent>
          <CategorySelector
            activeCategory={activeCategory}
            onSelectCategory={handleCategoryChange}
          />
          <CarouselContainer>
            <ImageCarousel images={activeImages} key={activeCategory} />
          </CarouselContainer>
        </MainContent>
      </ContentWrapper>
    </AppContainer>
  );
}

export default DesignSection;
