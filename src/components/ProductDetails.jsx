import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProductDetails from "./utils/fetchProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchProductDetails(id);
      setProductDetails(data);
      console.log(data);
    };
    getDetails();
  }, [id]);

  if (!productDetails) {
    return <div>Loading...</div>;
  }

  const {
    name,
    description,
    cover_image,
    price,
    available_colors,
    available_sizes,
  } = productDetails;

  const brand = productDetails?.brand?.name;

  return (
    <>
      <div className="flex flex-col gap-5 border border-gray-400">
        <h1 className="font-bold text-xl">{name}</h1>
        <h2 className="font-bold text-xl">$ {price}</h2>

        <span className="color">Color:</span>
        <div className="flex gap-3">
          {available_colors.map((color) => (
            <div key={color}>
              <button className="gap-2 border border-gray-200 rounded-md p-1">
                {color}
              </button>
            </div>
          ))}
        </div>
        <span className="size">Size:</span>
        <div>
          <select className="border border-gray-200 rounded-md p-1 cursor-pointer">
            {available_sizes.map((size) => (
              <option className="cursor-pointer" key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <label className="quantity">Quantity:</label>
        <select 
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border border-gray-200 rounded-md p-1 cursor-pointer"
        >
          {Array.from({length: 10}, (_, i) => i + 1).map((num) => (
            <option className="cursor-pointer" key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button className="bg-orange-600 text-white p-3 w-50 border rounded-md cursor-pointer">
          Add to Cart
        </button>
        <hr className="w-full border border-gray-50" />
      </div>

      <h2 className="my-4 font-semibold">Details</h2>
      <div>
        <h2 className="my-4 text-gray-600 text-sm">Brand: {brand}</h2>
        <p className="my-4 text-gray-600 text-sm">{description}</p>
      </div>
    </>
  );
};

export default ProductDetails;
