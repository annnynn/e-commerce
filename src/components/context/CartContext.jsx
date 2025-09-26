import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (productId, color, quantity, size, token) => {
    try {
      const response = await fetch(`https://api.redseam.redberryinternship.ge/api/cart/products/${productId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          color,
          quantity,
          size,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();

      setCart((prev) => [...prev, data]);

      console.log("Added to cart:", data);
      return data;
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
