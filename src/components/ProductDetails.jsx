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
    images,
  } = productDetails;

  const brand = productDetails?.brand?.name;
  const brandLogo = productDetails?.brand?.image;

  return (
    <div className="flex py-5 px-7 m-auto w-4/4 gap-5 flex-wrap">
      <div className="flex">
        <div className="flex flex-col gap-9 rounded-md">
          {images.map((image, id) => (
            <img
              key={id}
              src={image}
              className="w-[121px] h-[161.33px] object-contain"
            />
          ))}
        </div>

        <div className="w-[703px] h-[937px] rounded-[10px]">
          <img src={cover_image} className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="flex flex-col w-[704px] rounded-md">
        <h1 className="font-semibold text-[32px] capitalize">{name}</h1>
        <h2 className="font-semibold text-[32px] mt-[21px] mb-[56px]">
          $ {price}
        </h2>

        <div className="flex flex-col gap-3">
          <span className="color">Color:</span>
          <div className="flex gap-3">
            {available_colors.map((color) => (
              <div className="flex" key={color}>
                <div
                  className="border border-gray-200 rounded-full w-[38px] h-[38px]"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[53px] mb-[48px]">
          <span>Size:</span>
          <div className="flex gap-2 mt-[16px]">
            {available_sizes.map((size) => (
              <button
                className="cursor-pointer w-[70px] h-[42px] border border-[#E1DFE1] rounded-[10px] text-[16px]"
                key={size}
                value={size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <label className="quantity">Quantity:</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="cursor pointer w-[70px] h-[42px] border border-[#E1DFE1] rounded-[10px] text-base mt-[16px] text-center"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option className="cursor-pointer" key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button className="bg-orange-600 text-[#FFFFFF] text-[18px] font-medium w-[704px] h-[59px] border rounded-[10px] cursor-pointer mt-[56px]">
          Add to Cart
        </button>
        <hr className="w-full border border-[#E1DFE1] mt-[56px] mb-[56px]" />

        <div className="flex gap-5 justify-between items-center">
          <h2 className="mt-[4px] font-medium text-[20px]">Details</h2>
          <img src={brandLogo} className="w-23 h-15" />
        </div>
        <div>
          <h2 className="mt-[22px] text-[#3E424A] text-base">Brand: {brand}</h2>
          <p className="mt-[19px] text-[#3E424A] text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
