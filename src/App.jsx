import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
