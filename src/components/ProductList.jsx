import { useEffect, useState } from "react";
import fetchProducts from "./utils/fetchProducts";
import PriceRangeFilter from "./PriceRangeFilter";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  {
    /**დამატებითი ინფო(ამშემთხვევაში ფეიჯები) */
  }
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const [filteredPrice, setFilteredPrice] = useState([0, 1000]);

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
    <PriceRangeFilter/>
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
      {meta && meta.last_page && (
        <div className="flex items-center justify-center mt-4 space-x-2">
          {/**prev gilaki */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {/**გვერდები */}
          {Array.from({ length: meta.last_page }, (_, i) => {
            const pageNumber = i + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </button>
            );
          })}
          {/*next gilaki */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === meta.last_page}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ProductList;
