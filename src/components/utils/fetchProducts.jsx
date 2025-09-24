const fetchProducts = async (currentPage, perPage, sort = "default") => {
  try {
    let url = `https://api.redseam.redberryinternship.ge/api/products?page=${currentPage}&per_page=${perPage}`;

    if (sort && sort !== "default") {
      url += `&sort=${sort}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("ერრრრრრრრ", error);
    return null;
  }
};

export default fetchProducts;
