import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="parent flex gap-10">
        <div className="galery"></div>
        <div className="clickedItem"></div>
      </div>
      <div>
        <h1>Product Name</h1>
        <h2>product price</h2>
        <span className="color">Color:</span>
        <span className="size">Size:</span>
        <div className="sizesArray"></div>
        <span>Quantity</span>
        <input type="number" min={1} max={10} />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
