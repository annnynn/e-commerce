import { useEffect, useState } from "react";
import fetchProducts from "./utils/fetchProducts";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(currentPage, perPage);
      setProducts(data.data || []);
      setMeta(data.meta || null);
      console.log(data.meta);
    }; 
    getProducts();
  }, [currentPage]);

  return ( 
    <div className="product-list">      
        {products.map((product) => (
          <div key={product.id}>
          <img src={product.cover_image} style={{ width: "200px", height: "250px" }} alt={product.name}/>
          <h3>{product.name}</h3>
          <p>$ {product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
