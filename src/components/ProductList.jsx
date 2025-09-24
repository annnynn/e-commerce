import { useEffect, useState } from "react";
import fetchProducts from "./utils/fetchProducts";
import Pagination from "./Pagination";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  {
    /**დამატებითი ინფო(ამშემთხვევაში ფეიჯები) */
  }
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
    {
      /*როცა currentPage შეიცვლება(კლიკზე), useEffect თავიდან გამოიძახებს API-s*/
    }
  }, [currentPage]);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <div key={product.id} >
            <img
              src={product.cover_image}
              style={{ width: "200px", height: "250px" }}
              alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>$ {product.price}</p>
          </div>
        ))}
      </div>
      {/*pagination*/}
        <Pagination meta={meta} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  );
};

export default ProductList;
