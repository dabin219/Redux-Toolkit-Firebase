import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { addProducts } from "../redux/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import styled from "styled-components";

function Main(): JSX.Element {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  const getProducts = async () => {
    const productsSnapshot = await getDocs(collection(db, "products"));
    const newProducts: Array<any> = [];
    productsSnapshot.docs.map((doc) => newProducts.push(doc.data()));
    dispatch(addProducts(newProducts));
  };

  return (
    <Container>
      <FetchButton onClick={getProducts}>click here to fetch data</FetchButton>
      {products.length && (
        <ProductList title="PRODUCT LIST">
          {products.map((product) => (
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
