import ProductCard from "./ProductCard";
import styled from "styled-components";
import { ProductProps } from "../model/products";

interface props {
  data: ProductProps[];
}

function ProductList({ data }: props): JSX.Element {
  return (
    <Container>
      <List>
        {data.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </List>
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7%;
`;

const List = styled.div`
  display: grid;
  ${({ theme }) => theme.media.desktop`    
      grid-template-columns: repeat(4, 1fr);
  `}
  ${({ theme }) => theme.media.tablet`
      grid-template-columns: repeat(3, 1fr);
  `}
  ${({ theme }) => theme.media.mobile`
      grid-template-columns: repeat(2, 1fr);
  `}
`;
