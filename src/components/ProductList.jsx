import { useEffect, useState } from "react";
import fetchProducts from "./utils/fetchProducts";
import Pagination from "./Pagination";
import PriceRangeFilter from "./PriceRangeFilter";
import SortProducts from "./SortProducts";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const [filterDropdown, setFilterDropdown] = useState(false);

  const [filteredPrice, setFilteredPrice] = useState({ from: "", to: "" });

  const [sortingProducts, setSortingProducts] = useState("default");

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(currentPage, perPage, sortingProducts);
      setProducts(data.data || []);
      setFilteredProducts(data.data || []);
      setMeta(data.meta || null);
      console.log(data.meta);
    };
    getProducts();
    {
      /*როცა currentPage შეიცვლება(კლიკზე), useEffect თავიდან გამოიძახებს API-s*/
    }
  }, [currentPage, sortingProducts]);

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

  const handleSortChange = (e) => {
    setSortingProducts(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between px-20 my-6 items-center">
        <h2 className="text-3xl font-bold">Products</h2>
        <div className="flex gap-4">
          <PriceRangeFilter
            filteredPrice={filteredPrice}
            setFilteredPrice={setFilteredPrice}
            onApply={applyPriceFilter}
            filterDropdown={filterDropdown}
            setFilterDropdown={setFilterDropdown}
          />
          <SortProducts
            sortingProducts={sortingProducts}
            handleSortChange={handleSortChange}
          />
        </div>
      </div>

      <ProductItem filteredProducts={filteredProducts}/>

      {/*pagination*/}
      <Pagination
        meta={meta}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      
    </>
  );
};

export default ProductList;
