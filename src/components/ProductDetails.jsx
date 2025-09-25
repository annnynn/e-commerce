import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchProductDetails from "./utils/fetchProductDetails";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentColorIndex, setCurrentColorIndex] = useState(null);

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

  const getColorStyle = (color) => {
    switch (color.toLowerCase()) {
      case "white":
        return {
          backgroundColor: "white",
          border: "1px solid #ccc",
        };
      case "navy blue":
        return {
          backgroundColor: "#000080",
        };
      case "cream":
        return {
          backgroundColor: "#FFFDD0",
        };
      case "peach":
        return {
          backgroundColor: "#FFD3AC",
        };
      case "off white":
        return {
          backgroundColor: "#FAF9F6",
          border: "1px solid #ccc",
        };
      case "mauve":
        return {
          backgroundColor: "#E0B0FF",
          border: "1px solid #ccc",
        };
      case "multi":
        return {
          background:
            "linear-gradient(90deg, #ff7e5f, #feb47b, #86a8e7, #91eae4)",
        };
      default:
        return {
          backgroundColor: color.toLowerCase(),
        };
    }
  };

  console.log(currentColorIndex);

  return (
    <div className="flex justify-between p-[100px]">
      <div className="flex gap-24">
        <div className="flex flex-col gap-9 rounded-md">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-[121px] h-[161.33px] object-contain cursor-pointer"
            />
          ))}
        </div>

        <div className="w-[703px] h-[937px] rounded-[10px]">
          <img
            src={
              currentColorIndex !== null && currentColorIndex !== undefined
                ? images[currentColorIndex]
                : cover_image
            }
          />
        </div>
      </div>
      <div className="flex flex-col w-[704px] h-[907px] rounded-md">
        <h1 className="font-semibold text-[32px] capitalize">{name}</h1>
        <h2 className="font-semibold text-[32px] mt-[21px] mb-[56px]">
          $ {price}
        </h2>

        <div className="flex flex-col gap-3">
          <span className="color">Color: {selectedColor}</span>
          <div className="flex gap-3">
            {available_colors.map((color, index) => (
              <div className="flex" key={index}>
                <div
                  onClick={() => {
                    setCurrentColorIndex(index);
                    setSelectedColor(color);
                  }}
                  className={`cursor-pointer rounded-full w-[38px] h-[38px]
                  ${
                    currentColorIndex === index
                      ? "ring-1 ring-[#E1DFE1] ring-offset-3 ring-offset-white"
                      : ""
                  }
                    `}
                  style={getColorStyle(color)}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[53px] mb-[48px]">
          <span>Size: {selectedSize}</span>
          <div className="flex gap-2 mt-[16px]">
            {available_sizes.map((size) => (
              <button
                key={size}
                value={size}
                onClick={() => setSize(size)}
                className={`cursor-pointer w-[70px] h-[42px] rounded-[10px] text-[16px]
                  ${
                    selectedSize === size
                      ? "bg-[#F8F6F7] border border-[#10151F]"
                      : ""
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <label className="quantity">Quantity:</label>

        {/** აქ დროპდაუნი შეიძლება გავაკეთო თუ მოვასწარი */}
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

        
        <button className="bg-orange-600 text-[#FFFFFF] text-[18px] font-medium w-[704px] h-[59px] border rounded-[10px] cursor-pointer mt-[56px] items-center flex justify-center">
          <ShoppingCartIcon className="w-[24px] h-[24px] inline-block mr-1.5" />
          <span>Add to Cart</span>
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
