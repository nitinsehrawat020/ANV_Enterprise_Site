import styled from "styled-components";
import { device } from "../Styles/Theme";

const ContainerFilter = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1.375rem;
  text-align: center;
  font-size: 1rem;
  color: var(--color-white-500);
  /* padding: 0rem 2rem; */
`;

const SortBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem;
  gap: 0.5rem;

  @media ${device.phnAndTab} {
    font-size: 0.6rem;
  }
`;

const StyledSelect = styled.select`
  background-color: var(--color-background-200);
  padding: 5px;
  border: 2px solid var(--color-background-800);
  border-radius: var(--br-l);
`;

const StyledOption = styled.option``;

const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.625rem;
  gap: 0.5rem;
  @media ${device.mobile} {
    display: none;
  }
`;

const CategoryList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-background-200);
  padding: 5px 10px;
  border: 2px solid var(--color-background-800);
  border-radius: var(--br-l);
`;

const CategoryItem = styled.div`
  padding: 2px;
  background-color: ${(props) =>
    props.active === "active"
      ? "var(--color-primary)"
      : "var(--color-background-200)"};
  padding: 0.5rem;
  border-radius: var(--br-l);
`;

const MobileCategory = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.6rem;

  @media ${device.mobile} {
    display: flex;
  }
`;
const MobileCategoryList = styled.select`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-background-200);
  padding: 5px 10px;
  border: 2px solid var(--color-background-800);
  border-radius: var(--br-l);
  @media ${device.phnAndTab} {
    font-size: 0.5rem;
  }
`;

const MobileCategoryItem = styled.option`
  padding: 2px;
  text-align: center;
`;
const FiltersAndCategory = () => {
  return (
    <ContainerFilter>
      <Category>
        <CategoryList>
          <CategoryItem active="active">All</CategoryItem>
          <CategoryItem>Halls</CategoryItem>
          <CategoryItem>Living Rooms</CategoryItem>
          <CategoryItem>Kitchens</CategoryItem>
          <CategoryItem>Bathrooms</CategoryItem>
          <CategoryItem>Walls</CategoryItem>
        </CategoryList>
      </Category>
      <MobileCategory>
        Category :-
        <MobileCategoryList>
          <MobileCategoryItem>All</MobileCategoryItem>
          <MobileCategoryItem>Halls</MobileCategoryItem>
          <MobileCategoryItem>Living Rooms</MobileCategoryItem>
          <MobileCategoryItem>Kitchens</MobileCategoryItem>
          <MobileCategoryItem>Bathrooms</MobileCategoryItem>
          <MobileCategoryItem>Walls</MobileCategoryItem>
        </MobileCategoryList>
      </MobileCategory>
    </ContainerFilter>
  );
};

export default FiltersAndCategory;
