import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
