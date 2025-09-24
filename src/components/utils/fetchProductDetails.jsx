const fetchProductDetails = async (id) => {
  try {
    const PRODUCT_DETAILS_API = `https://api.redseam.redberryinternship.ge/api/products/${id}`;

    const res = await fetch(PRODUCT_DETAILS_API);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("can't fetch product details");
    return null;
  }
};

export default fetchProductDetails;