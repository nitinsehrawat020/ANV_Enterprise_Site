import React from "react";
import styled from "styled-components";
import { DesignCategory } from "../util/types";
import {
  CategoryButton,
  CategoryContainer,
} from "../component/home/styleHome.jsx";

const categories = [
  { id: DesignCategory.FalseCeiling, label: "False Ceiling" },
  { id: DesignCategory.Molding, label: "Molding" },
];

export const CategorySelector = ({ activeCategory, onSelectCategory }) => {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          $isActive={activeCategory === category.id}
        >
          {category.label}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
};
