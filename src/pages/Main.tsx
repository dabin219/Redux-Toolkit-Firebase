import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import styled from "styled-components";
import { getProducts } from "../redux/productsSlice";
import { Oval } from "react-loader-spinner";

function Main(): JSX.Element {
  const { data, loading } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getProducts());
  };

  if (loading) {
    return (
      <Loader>
        <Oval color="black" height={100} width={100} />
      </Loader>
    );
  }

  return (
    <Container>
      <FetchButton onClick={fetchData}>click here to fetch data</FetchButton>
      {data.length && (
        <ProductList title="PRODUCT LIST">
          {data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ProductList>
      )}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20%;
`;

const FetchButton = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
  text-align: center;
  font-weight: 800;
  cursor: pointer;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
