import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
