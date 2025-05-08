import { useState } from "react";
import {
  CategoryContainer,
  CategoryItem,
  CategoryList,
  StyleCategory,
} from "./StyleWorker";

function Category({ active, setActive }) {
  return (
    <StyleCategory>
      <CategoryContainer>
        Category:-{" "}
        <CategoryList>
          <CategoryItem
            onClick={() => setActive("active")}
            className={active === "active" && "active"}
          >
            Active
          </CategoryItem>
          <CategoryItem
            onClick={() => setActive("non-active")}
            className={active === "non-active" && "active"}
          >
            Non-active
          </CategoryItem>
        </CategoryList>
      </CategoryContainer>
    </StyleCategory>
  );
}

export default Category;
