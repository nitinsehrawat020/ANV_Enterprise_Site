import { CategoryContainer, CategoryItem, StyleCategory } from "../StyleSites";
import styled from "styled-components";

const ActiveCategoryItem = styled(CategoryItem)`
  background-color: var(--color-primary-500);
  color: var(--color-white-500);
`;

function SitesCategory({ setActiveCategory, activeCategory }) {
  const categories = ["All", "Active", "Complete", "Upcoming"];

  return (
    <StyleCategory>
      <CategoryContainer>
        Category:-
        {categories.map((category) =>
          category === activeCategory ? (
            <ActiveCategoryItem
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </ActiveCategoryItem>
          ) : (
            <CategoryItem
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryItem>
          )
        )}
      </CategoryContainer>
    </StyleCategory>
  );
}

export default SitesCategory;
