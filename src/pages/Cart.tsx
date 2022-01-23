import ProductList from "../components/ProductList";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Cart(): JSX.Element {
  const { cart } = useSelector((state: RootState) => state);
  return (
    <ProductList title="CART">
      {cart && cart.map((item) => <ProductCard key={item.id} data={item} />)}
    </ProductList>
  );
}

export default Cart;
