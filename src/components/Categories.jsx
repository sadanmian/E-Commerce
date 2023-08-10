import React from "react";
import { styled } from "styled-components";
import { CategoryItem } from "./CategoryItem";
import { categories } from "../data";

const Conatiner = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const Categories = () => {
  return (
    <Conatiner>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Conatiner>
  );
};
