import React from "react";
import { Product } from "./Product";
import { styled } from "styled-components";
import { popularProducts } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};
