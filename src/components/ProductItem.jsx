import { Link } from "react-router-dom";
const ProductItem = ({ filteredProducts }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 px-20 my-6">
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="cursor-pointer" key={product.id}>
              <div
                className="border p-2 rounded-md border-gray-200 flex justify-center items-center flex-col"
                key={product.id}
              >
                <img
                  className="w-full object-cover"
                  src={product.cover_image}
                  style={{ width: "200px", height: "250px" }}
                  alt={product.name}
                />
              </div>
              <h3>{product.name}</h3>
              <p>$ {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductItem;
