import ProductList from "../components/ProductList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Cart(): JSX.Element {
  const { products } = useSelector((state: RootState) => state);
  return <ProductList data={products} />;
}

export default Cart;
