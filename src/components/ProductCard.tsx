import { ProductProps } from "../model/products";
import ThemeColor from ".././constant/color";
import styled from "styled-components";
import { add, remove } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

interface props {
  data: ProductProps;
}

function ProductCard({ data }: props): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const { name, image, price } = data;
  const priceToString = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 원";
  };

  const toggleButtonHandler = () => {
    dispatch(add(data));
  };

  return (
    <Container>
      <Image src={image} alt={name} />
      <Name name={name} info={priceToString(price)} />
      <button onClick={toggleButtonHandler}>toggle</button>
    </Container>
  );
}

export default ProductCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 5%;
`;

const Image = styled.img`
  &:hover {
    opacity: 0.8;
  }
  transition: all ease 0.5s;
`;

interface Content {
  name: string;
  info: string | number;
}

const Name = styled.h1<Content>`
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
