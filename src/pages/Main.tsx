import ProductList from "../components/ProductList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { loadProducts } from "../redux/productsSlice";
import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

function Main(): JSX.Element {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const getProducts = async () => {
    const productsSnapshot = await getDocs(collection(db, "products")); // 데이터 요청
    const products: any[] = [];
    productsSnapshot.docs.map((doc) => products.push(doc.data()));
    dispatch(loadProducts(products));
  };
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <FetchButton>click here to fetch data</FetchButton>
      {/* <ProductList data={products} /> */}
    </>
  );
}

export default Main;

const FetchButton = styled.div``;
