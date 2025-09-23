import { useEffect, useState } from "react";
import fetchProducts from "./utils/fetchProducts";
import PriceRangeFilter from "./PriceRangeFilter";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const [filterDropdown, setFilterDropdown] = useState(false);

  const [filteredPrice, setFilteredPrice] = useState({ from: "", to: "" });

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(currentPage, perPage);
      setProducts(data.data || []);
      setFilteredProducts(data.data || []);
      setMeta(data.meta || null);
      console.log(data.meta);
    };
    getProducts();
    {
      /*როცა currentPage შეიცვლება(კლიკზე), useEffect თავიდან გამოიძახებს API-s*/
    }
  }, [currentPage]);

  const applyPriceFilter = () => {
    const from = parseFloat(filteredPrice.from);
    const to = parseFloat(filteredPrice.to);

    const filtered = products.filter((product) => {
      const price = parseFloat(product.price);
      return (isNaN(from) || price >= from) && (isNaN(to) || price <= to);
    });

    setFilteredProducts(filtered);

    setFilteredPrice({ from: "", to: "" });
    setFilterDropdown(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setFilterDropdown(false);
    setFilteredPrice({ from: "", to: "" });
  };

  return (
    <>
      <PriceRangeFilter
        filteredPrice={filteredPrice}
        setFilteredPrice={setFilteredPrice}
        onApply={applyPriceFilter}
        filterDropdown={filterDropdown}
        setFilterDropdown={setFilterDropdown}
      />

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredProducts.map((product) => (
          <div key={product.id}>
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
            onClick={() => handlePageChange(currentPage - 1)}
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
            onClick={() => handlePageChange(currentPage + 1)}
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
