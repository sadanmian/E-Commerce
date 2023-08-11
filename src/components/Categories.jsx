import React from "react";
import { styled } from "styled-components";
import { CategoryItem } from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";

const Conatiner = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
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
