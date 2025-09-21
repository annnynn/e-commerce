const fetchProducts = async (currentPage, perPage) => {
  try {
    const products = await fetch(
      `https://api.redseam.redberryinternship.ge/api/products?page=${currentPage}&per_page=${perPage}`
    );
    const data = await products.json();
    return data;
  } catch (error) {
    console.error("ერრრრრრრრ", error);
    return null;
  }
};

export default fetchProducts;
