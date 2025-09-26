import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
