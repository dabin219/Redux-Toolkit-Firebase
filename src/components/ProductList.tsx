import styled from "styled-components";

interface props {
  children: React.ReactNode;
  title: string;
}

function ProductList({ title, children }: props): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
      <List>{children}</List>
    </Container>
  );
}

export default ProductList;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 7%;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 900;
`;
