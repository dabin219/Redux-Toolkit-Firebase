import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cart } from "styled-icons/bootstrap";

function Header(): JSX.Element {
  const LOGO: string = "REDUX & FIREBASE";
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Title>{LOGO}</Title>
        </Link>
        <Link to="/cart">
          <CartIcon />
        </Link>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 20%;
  background: #000000;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 1.5em;
  font-weight: bold;
`;

const CartIcon = styled(Cart)`
  width: 30px;
  color: white;
`;
