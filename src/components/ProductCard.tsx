import { useLocation } from "react-router-dom";
import { ProductProps } from "../model/products";
import { add, remove } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { CartPlus } from "@styled-icons/bootstrap";
import { Delete } from "@styled-icons/fluentui-system-regular";
import ThemeColor from ".././constant/color";
import styled from "styled-components";
interface props {
  data: ProductProps;
}

function ProductCard({ data }: props): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const { name, image, price } = data;
  const priceToString = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  const addCartItem = async () => {
    await dispatch(add(data));
  };

  const removeCartItem = async () => {
    await dispatch(remove(data));
  };

  return (
    <Container>
      <Image src={image} alt={name} />
      <Name name={name} info={priceToString(price)} />
      {pathname === "/cart" ? (
        <DeleteButton onClick={removeCartItem} />
      ) : (
        <CartButton onClick={addCartItem} />
      )}
    </Container>
  );
}

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10% 5%;
`;

const Image = styled.img`
  height: 150px;
  transition: all ease 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;

interface Content {
  name: string;
  info: string | number;
}

const Name = styled.h1`
  &:before {
    content: "${(props: Content) => props.name}";
  }
  ${Container}:hover & {
    ${(props: Content) => `&::before{
  content:"${props.info}"
  }`};
  }
  padding-top: 5%;
  color: ${ThemeColor.gray700};
  text-align: right;
  font-size: 0.85rem;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CartButton = styled(CartPlus)`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  color: white;
  cursor: pointer;
`;

const DeleteButton = styled(Delete)`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  color: white;
  cursor: pointer;
`;
