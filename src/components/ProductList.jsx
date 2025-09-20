import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetch(
        "https://api.redseam.redberryinternship.ge/api/products"
      );
      const json = await data.json();
      setProducts(json.data);
      console.log(json.data);
    }; 
    getProducts();
  }, []);

  return ( 
    <div className="product-list flex flex-wrap justify-center">      
        {products.map((product) => (
          <div key={product.id}>
          <span>{product.name}</span>
          <p>$ {product.price}</p>
          <img src={product.cover_image} style={{ width: "200px", height: "250px" }} alt={product.name} />
          </div>
        ))}
    </div>
  );
};

export default ProductList;
