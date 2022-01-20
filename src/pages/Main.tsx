import ProductList from "../components/ProductList";
import { ProductProps } from "../model/products";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { add, remove } from "../redux/productsSlice";

function Main(): JSX.Element {
  const [data, setData] = useState<any[]>([]);

  const productList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();
  console.log(1);
  const getProducts = async () => {
    const productsSnapshot = await getDocs(collection(db, "products")); // 데이터 요청
    const productsList = productsSnapshot.docs.map((doc) => doc.data());
    console.log(productsList);
    const products: any[] = [];
    productsSnapshot.docs.map((doc) => {
      products.push(doc.data());
    });
    setData(productsList);
  };
  getProducts();

  useEffect(() => {
    console.log(551);
  }, []);

  return <ProductList data={data} />;
}

export default Main;
