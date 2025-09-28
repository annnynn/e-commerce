import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import { UserProvider } from "./components/utils/User";



function App() {
  return (
    <>
      <Provider store={appStore}>
        <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
         </UserProvider>
      </Provider>
    </>
  );
}

export default App;
